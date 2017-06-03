import {FETCH_USERS_REQUEST, RECEIVE_USERS} from '../constants';
import {define_token} from '../utils/http_functions';
import axios  from 'axios';
import {User, Task} from '../models/model';

export function fetchUsersRequest(initial) {
    const message = (initial)?null:"Refreshing users list";

    return {
        type: FETCH_USERS_REQUEST,
        payload: {
            message,
        },
    };
}

export function receiveUsers(users, initial) {
    const message = (initial)?null:"Users list updated";
    return {
        type: RECEIVE_USERS,
        payload: {
            users,
            message,
        },
    };
}


export function fetchUsers(token, userId, loadTasks, initial = false) {
    return (dispatch) => {
        if(!axios.defaults.headers.common['Authorization']){
            define_token(token);
        }
        dispatch(fetchUsersRequest(initial));
        let filter = [];
        if(userId){
            filter.push(["id", "=", parseInt(userId, 10)]);
        }
        let tasks_ids = [];
        let model = new User();
        model.search(filter, {
          transformResponse: [function (data) {
              let newData = JSON.parse(data);
              let results = [];
              if(newData.n_items > 0){
                  if(loadTasks){
                      let task = new Task();
                      task.search([
                          ["user_id", "=", parseInt(userId, 10)],
                          ["state", "in", ["open", "pending"]]
                      ], {
                          transformResponse: [function (data) {
                              let newTaskData = JSON.parse(data);
                              tasks_ids = task.parseTaskIds(newTaskData);
                              dispatch(receiveUsers(model.parse(newData, tasks_ids), initial));
                          }]
                      });
                  }
              }
              else{
                  results = model.parse(newData, tasks_ids);
                  dispatch(receiveUsers(results), initial);
              }
          }]
        });
    }
}