import React from 'react';

import {debug} from './debug';
export const DEBUG = (debug)?debug:false;

export const VERSION = "0.0.0";

export const RECEIVE_PROJECT = 'RECEIVE_PROJECT';
export const FETCH_PROJECT_REQUEST = 'FETCH_PROJECT_REQUEST';

export const RECEIVE_PROJECTS = 'RECEIVE_PROJECTS';
export const FETCH_PROJECTS_REQUEST = 'FETCH_PROJECTS_REQUEST';

export const RECEIVE_TASKS = 'RECEIVE_TASKS';
export const FETCH_TASKS_REQUEST = 'FETCH_TASKS_REQUEST';
export const SET_ACTIVE_TASK = 'SET_ACTIVE_TASK';

export const SEARCH_PROJECTS_REQUEST = 'SEARCH_PROJECTS_REQUEST';

export const SEARCH_TASKS_REQUEST = 'SEARCH_TASKS_REQUEST';

export const RECEIVE_TASK_WORK = 'RECEIVE_TASK_WORK';
export const FETCH_TASK_WORK_REQUEST = 'FETCH_TASK_WORK_REQUEST';
export const UI_OPEN_TASK_WORK_DIALOG = 'UI_OPEN_TASK_WORK_DIALOG';
export const UI_CLOSE_TASK_WORK_DIALOG = 'UI_CLOSE_TASK_WORK_DIALOG';