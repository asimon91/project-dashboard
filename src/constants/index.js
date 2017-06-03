import React from 'react';

import {debug} from './debug';
export const DEBUG = (debug)?debug:false;

export const TOKEN = "eyJhbGciOiJIUzI1NiJ9.eyJsb2dpbiI6ImFkbWluIiwicGFzc3dvcmQiOiJhZG1pbiJ9.woh6RaTFrT4ANXK6e_BgUayaP3RFE2bmndBSJLEGQrI";

export const VERSION = "0.0.0";

export const UI_OPEN_MENU = 'UI_OPEN_MENU';
export const UI_CLOSE_MENU = 'UI_CLOSE_MENU';

export const BREADCRUMB_ADD = 'BREADCRUMB_ADD';
export const BREADCRUMB_CLEAR = 'BREADCRUMB_CLEAR';

export const RECEIVE_PROJECTS = 'RECEIVE_PROJECTS';
export const FETCH_PROJECTS_REQUEST = 'FETCH_PROJECTS_REQUEST';
export const SET_ACTIVE_PROJECT = 'SET_ACTIVE_PROJECT';

export const RECEIVE_TASKS = 'RECEIVE_TASKS';
export const FETCH_TASKS_REQUEST = 'FETCH_TASKS_REQUEST';
export const SET_ACTIVE_TASK = 'SET_ACTIVE_TASK';

export const SEARCH_PROJECTS_REQUEST = 'SEARCH_PROJECTS_REQUEST';

export const SEARCH_TASKS_REQUEST = 'SEARCH_TASKS_REQUEST';

export const SEARCH_USERS_REQUEST = 'SEARCH_USERS_REQUEST';

export const SEARCH_COMPANIES_REQUEST = 'SEARCH_COMPANIES_REQUEST';

export const RECEIVE_TASK_WORK = 'RECEIVE_TASK_WORK';
export const FETCH_TASK_WORK_REQUEST = 'FETCH_TASK_WORK_REQUEST';

export const RECEIVE_USERS = 'RECEIVE_USERS';
export const FETCH_USERS_REQUEST = 'FETCH_USERS_REQUEST';

export const RECEIVE_COMPANIES = 'RECEIVE_COMPANIES';
export const FETCH_COMPANIES_REQUEST = 'FETCH_COMPANIES_REQUEST';
export const SET_ACTIVE_COMPANY = 'SET_ACTIVE_COMPANY';

export const SET_FILTERS = 'SET_FILTERS';
export const ADD_FILTER = 'ADD_FILTER';

export const UI_OPEN_TASK_WORK_DIALOG = 'UI_OPEN_TASK_WORK_DIALOG';
export const UI_CLOSE_TASK_WORK_DIALOG = 'UI_CLOSE_TASK_WORK_DIALOG';

export const UI_OPEN_FILTER_BUTTON_MENU = 'UI_OPEN_FILTER_BUTTON_MENU';
export const UI_CLOSE_FILTER_BUTTON_MENU = 'UI_CLOSE_FILTER_BUTTON_MENU';