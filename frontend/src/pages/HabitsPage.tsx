import React, { useState } from "react";
import { getAuth, signOut } from 'firebase/auth';
import { uid } from 'uid';
import { set, ref, getDatabase } from 'firebase/database';

function HabitsPage() {
    const [habit, setHabit] = useState("");

    const auth = getAuth();
    const db = getDatabase();

    //Adding habits
    const writeToDatabase = () => {
        const habitId = uid();

        if (auth.currentUser != null) {
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
            <button onClick={writeToDatabase}>Add</button>
            <button onClick={() => signOut(auth)}>Sign Out</button>
        </div>
    );
}

export default HabitsPage;