import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import { ApolloProvider } from "react-apollo";
import Login from '../pages/Login';
import client from "../apolloClient";

describe('Login', () => {
    let component = null;
  
    it('renders correctly', () => {
        component = renderer.create(
            <ApolloProvider client={client}>
                <Login />
            </ApolloProvider>,
        );
    });

    it('이메일 변경 테스트', () => {
        
    });

    it('유저네임 변경 테스트', () => {

    });

    it('비밀번호 변경 테스트', () => {

    });
});