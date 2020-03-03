import React, { useEffect, useState } from 'react';
import './MainList.css';
import { IonList, IonItem, IonIcon, IonCheckbox, IonLabel, IonButton, IonInput } from '@ionic/react';
import { trash } from 'ionicons/icons';
import { getCurrentUser, db } from '../firebase';
import { useHistory } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';

const MainList: React.FC = () => {

  const history = useHistory();
  const dispatch = useDispatch();
  const taskList = useSelector((state: any) => state.taskReducer);
  const [task, setTask] = useState('');
  const [uid, setUid] = useState('');

  // Get user id from Firebase on component mount
  useEffect(()=>{
    getCurrentUser().then((user: any) => {      
      if(!user){
        history.push('/login'); // Why does url update, but component does not render?
      }
      else {
        setUid(user.uid);
      }
    });
  }, [history]);

  // Set reducer with task list from Firebase
  useEffect(()=>{
    getCurrentUser().then((user: any) => {
      if(!user){
        return false;
      }
      else {
        db.ref(`users/${user.uid}`).on('value', snap => {
          snap.forEach(child => {
            dispatch({type: `SET_TASK_LIST`, payload: child.val()});
          });
        });
      }
    });
  }, []);

  // Handle deleting data from Firebase
  const deleteTask = (task: String) => {
    const popup = window.confirm(`Permanently delete ${task}?`);
    if(popup){
      db.ref(`/users/${uid}/${task}`).remove();
      resetReducer();
    }
  }

  // Handle posting new data to Firebase
  const handleSubmit = (e: any) => {
    e.preventDefault();
    if(task.trim() !== ''){
      db.ref(`/users/${uid}/${task}`).set({
        name: task,
        completed: false
      });
      setTask('');
      resetReducer();
    }
  }

  // Clear the reducer, then reset it with Firebase data
  async function resetReducer(){
    await dispatch({type: `CLEAR_REDUCER`});
    await getCurrentUser().then((user: any) => {
      db.ref(`users/${user.uid}`).on('value', snap => {
        snap.forEach(child => {
          dispatch({type: `SET_TASK_LIST`, payload: child.val()});
        });
      });
    });
  }

  // Toggle between completed and not completed based on checkbox status
  const toggleTask = (completed: boolean, key: any) => {
    db.ref(`users/${uid}/${key}`).update({completed: !completed});
    resetReducer(); // Why does this duplicate all entries?
  }

  return (
    <div className="container">
      <div className="list-container">
        <form className="list-form" onSubmit={handleSubmit}>
          <IonItem>
            <IonLabel position="floating">Add task</IonLabel>
            <IonInput value={task} onIonChange={(e: any)=>setTask(e.target.value)} />
          </IonItem>
          <IonItem>
            <IonButton type="submit">Add</IonButton>
          </IonItem>
        </form>
        <IonList>
          {taskList.map((task: any, i: number) =>
            <IonItem key={i}>
              <IonCheckbox onIonChange={()=>toggleTask(task.completed, task.name)} checked={task.completed} />
              <IonLabel className="list-task">{task.name}</IonLabel>
              <IonButton color="danger" onClick={()=>deleteTask(task.name)}>
                <IonIcon icon={trash}></IonIcon>
              </IonButton>
            </IonItem>
          )}
        </IonList>
      </div>
    </div>
  );
};

export default MainList;