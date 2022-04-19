import React, { useEffect, useState } from "react";
import { getAuth, signOut } from 'firebase/auth';
import { uid } from 'uid';
import { set, ref, getDatabase, onValue, remove } from 'firebase/database';

function HabitsPage() {
    const [habit, setHabit] = useState("");
    const [duration, setDuration] = useState("");
    const [habits, setHabits] = useState<any[]>([]);
    const [durations, setDurations] = useState<any[]>([]);

    const auth = getAuth();
    const db = getDatabase();

    useEffect(() => {
        auth.onAuthStateChanged((user) => {
            if (user) {
                if (auth.currentUser) {
                    onValue(ref(db, `/${auth.currentUser.uid}`), snapshot => {
                        setHabits([]);
                        setDurations([]);
                        const data = snapshot.val();

                        if (data !== null) {
                            Object.values(data).map((habit) => {
                                setHabits((oldArray) => [...oldArray, habit]);
                            },
                                Object.values(data).map((duration) => {
                                    setDurations((oldArray) => [...oldArray, duration]);
                                }
                                ));
                        }
                    });
                }
            }
        });
    }, [auth, db])

    //Adding habits
    const writeToDatabase = () => {
        const habitId = uid();

        if (auth.currentUser) {
            set(ref(db, `/${auth.currentUser.uid}/${habitId}`), {
                habit: habit,
                duration: duration,
                habitId: habitId,
            });
        }

        setHabit("");
        setDuration("");
    };

    const handleDelete = (uid: string) => {
        if (auth.currentUser) {
            remove(ref(db, `/${auth.currentUser.uid}/${uid}`))
        }
    }

    return (
        <div>
            <h1>Hi</h1>
            <input
                type="text"
                placeholder="Add habit"
                value={habit}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setHabit(e.target.value)}
                required
            />
            <input
                type="number"
                placeholder="Duration"
                value={duration}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setDuration(e.target.value)}
                required
            />
            <table>
                <tr>
                    <th>Habit</th>
                    <th>Duration</th>
                </tr>
                <tr>
                    <td>
                        {
                            habits.map((habit) => (
                                <h3>{habit.habit}</h3>
                            ))
                        }
                    </td>
                    <td>
                        {
                            durations.map((duration) => (
                                <div>
                                    <h3>{duration.duration}</h3>
                                    <button onClick={() => handleDelete(duration.habitId)}>delete</button>
                                </div>
                            ))
                        }
                    </td>
                </tr>
            </table>


            <button onClick={writeToDatabase}>Add</button>
            <button onClick={() => signOut(auth)}>Sign Out</button>
        </div>
    );
}

export default HabitsPage;