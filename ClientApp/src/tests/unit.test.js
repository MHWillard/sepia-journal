/**
 * @jest-environment jsdom
 */

import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import NavMenu from '../components/NavMenu'
import {LoginContext} from '../contexts/LoginContext'
import React, { Component, useState, useEffect, useContext } from 'react';

/*
test: handle component making and passing in login token and testing for render

set login package token
render component with login information

test for:
title = has username of user
new post = option shows up if token is present

ANOTHER TEST: render and test for when these things aren't present

arrange, act, assert
*/