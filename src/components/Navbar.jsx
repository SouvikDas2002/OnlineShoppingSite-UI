import React from 'react'
import styled from 'styled-components'
import SearchIcon from '@mui/icons-material/Search';
import { Badge } from '@mui/material';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

const Container = styled.div`
    height:60px;
    box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
`
const Wrapper = styled.div`
    padding:10px 20px;
    display:flex;
    justify-content:space-between;
    align-items:center;
`
const Left = styled.div`
    flex:1;
    display:flex;
    align-items:center
`
const Language = styled.span`
    font-size:14px;
    cursor:pointer;
`
const SearchContainer = styled.div`
    border:1px solid lightgray;
    display:flex;
    align-items:center;
    margin-left:25px;
    padding:5px;
`
const Center = styled.div`
    flex:1;
    text-align:center;
`
const Logo = styled.h1`
    font-weight:bold;
`
const Right = styled.div`
    flex:1;
    display:flex;
    align-items:center;
    justify-content:flex-end;
`
const Input = styled.input`
    border:none;
`
const MenuItem = styled.div`
font-size:14px;
cursor:pointer;
margin-left:25px;
`

const Navbar = () => {
    return (
        <Container>
            <Wrapper>
                <Left>
                    <Language>EN</Language>
                    <SearchContainer>
                        <Input />
                        <SearchIcon style={{ color: "grey", fontSize: '16px' }} />
                    </SearchContainer>
                </Left>
                <Center><Logo>SD</Logo></Center>
                <Right>
                    <MenuItem>REGISTER</MenuItem>
                    <MenuItem>SIGN IN</MenuItem>
                    <MenuItem>
                        <Badge badgeContent={4} color='primary'>
                            <ShoppingCartOutlinedIcon />
                        </Badge>
                    </MenuItem>
                </Right>
            </Wrapper>
        </Container>
    )
}

export default Navbar