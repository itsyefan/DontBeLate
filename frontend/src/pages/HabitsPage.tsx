import React, { useEffect, useState } from "react";
import { getAuth, signOut } from 'firebase/auth';
import { uid } from 'uid';
import { set, ref, getDatabase, onValue } from 'firebase/database';

function HabitsPage() {
    const [habit, setHabit] = useState("");
    const [habits, setHabits] = useState<any[]>([]);

    const auth = getAuth();
    const db = getDatabase();

    useEffect(() => {
        auth.onAuthStateChanged((user) => {
            if (user) {
                if(auth.currentUser){
                    onValue(ref(db, `/${auth.currentUser.uid}`), snapshot => {
                        setHabits([]);
                        const data = snapshot.val();
                        if(data !== null){
                            Object.values(data).map((habit) => {
                                setHabits((oldArray) => [...oldArray, habit]);
                            });
                        }
                    });
                }
            }
        });
        
    }, [auth])

    //Adding habits
    const writeToDatabase = () => {
        const habitId = uid();

        if (auth.currentUser) {
            set(ref(db, `/${auth.currentUser.uid}/${habitId}`), {
                habit: habit,
                habitId: habitId,
            });
        }
        
        setHabit("");
    };
    
    return(
        <div>
            <h1>Hi</h1>
            <input 
                type="text" 
                placeholder="Add habit" 
                value={habit}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setHabit(e.target.value)}
            />
            {
                habits.map((habit) => (
                    <h3>{habit.habit}</h3>
                ))
            }
            <button onClick={writeToDatabase}>Add</button>
            <button onClick={() => signOut(auth)}>Sign Out</button>
        </div>
    );
}

export default HabitsPage;