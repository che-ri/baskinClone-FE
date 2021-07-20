import React from "react";
import { Text, Input, Grid, Button } from "../elements";
import styled from "styled-components";
import { loginSV } from "../redux/modules/user";
import { useDispatch } from "react-redux";

const Login = props => {
    const { history } = props;
    const dispatch = useDispatch();

    const [id, setId] = React.useState("");
    const [pwd, setPwd] = React.useState("");
    const login = () => {
        if (id === "" || pwd === "") {
            window.alert("아이디 혹은 비밀번호가 공란입니다! 입력해주세요!");
            return;
        }
        return dispatch(loginSV(id, pwd));
    };

    const signup = () => {
        props.history.push("/signup");
    };

    return (
        <>
            <Grid width="400px" margin="100px auto 0 auto">
                <Text size="1.5em" align="center">
                    로그인
                </Text>
                <Grid wdith="400px">
                    <Grid margin="0 0 20px 0">
                        <Input
                            type="text"
                            placeholder="아이디"
                            _onChange={e => {
                                setId(e.target.value);
                            }}
                        />
                        <Text color="#a0623d" size="11px">
                            {id.length < 3 ? "아이디는 3글자 이상이예요!" : ""}
                        </Text>
                    </Grid>
                    <Grid margin="0 0 20px 0">
                        <Input
                            type="password"
                            placeholder="비밀번호"
                            _onChange={e => {
                                setPwd(e.target.value);
                            }}
                        />
                        <Text color="#a0623d" size="11px">
                            {pwd.length < 3
                                ? "패스워드는 3글자 이상이예요!"
                                : ""}
                        </Text>
                    </Grid>
                    <Grid margin="0 0 20px 0">
                        <Button
                            _onClick={() => {
                                login();
                            }}
                            margin="10px 0px"
                        >
                            로그인
                        </Button>
                    </Grid>
                </Grid>
                <Controls>
                    <A href="https://www.happypointcard.com/page/member-info/find-id-pw-form.spc?findType=id">
                        아이디 찾기
                    </A>
                    <A href="https://www.happypointcard.com/page/member-info/find-id-pw-form.spc?findType=pw">
                        &nbsp;비밀번호 찾기
                    </A>
                    <Button
                        _onClick={() => {
                            signup();
                        }}
                        width="100px"
                        bg="#FFF"
                        hoverBg="#d3c1ab"
                        color="black"
                    >
                        회원가입
                    </Button>
                </Controls>
            </Grid>
        </>
    );
};

export default Login;

const A = styled.a`
    color: black;
    &:hover {
        color: #d3c1ab;
    }
    :not(:last-child) {
        margin-right: 30px;
    }
`;

const Controls = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;
