import * as React from 'react'
import { styled } from '@mui/system'
import Tabs from '@mui/base/Tabs'
import TabsList from '@mui/base/TabsList'
import TabPanel from '@mui/base/TabPanel'
import { buttonClasses } from '@mui/base/Button'
import Tab, { tabClasses } from '@mui/base/Tab'
import WebDevelopment from './TabContent/WebDevelopment'

let Styled_Tabs = () => {
  return (
    <Tabs
      style={{
        display: 'flex',
        flexDirection: 'column',
        placeItems: 'center'
      }}
      defaultValue={1}
    >
      <StyledTabsList>
        <StyledTab value={1}>Web </StyledTab>
        <StyledTab value={2}>Electronics</StyledTab>
        <StyledTab value={3}>Favourites</StyledTab>
      </StyledTabsList>
      <StyledTabPanel value={1}>
        <WebDevelopment />
      </StyledTabPanel>
      <StyledTabPanel value={2}>Second page</StyledTabPanel>
      <StyledTabPanel value={3}>Third page</StyledTabPanel>
    </Tabs>
  )
}

const blue = {
  50: '#F0F7FF',
  100: '#C2E0FF',
  200: '#80BFFF',
  300: '#66B2FF',
  400: '#3399FF',
  500: '#007FFF',
  600: '#0072E5',
  700: '#0059B2',
  800: '#004C99',
  900: '#003A75'
}

const grey = {
  50: '#f6f8fa',
  100: '#eaeef2',
  200: '#d0d7de',
  300: '#afb8c1',
  400: '#8c959f',
  500: '#6e7781',
  600: '#57606a',
  700: '#424a53',
  800: '#32383f',
  900: '#24292f'
}

const StyledTab = styled(Tab)`
  font-family: IBM Plex Sans, sans-serif;
  color: #44493a;
  cursor: pointer;
  font-size: 0.875rem;
  font-weight: bold;
  background-color: transparent;
  width: 100%;
  padding: 12px;
  margin: 6px 6px;
  border: none;
  border-radius: 7px;
  display: flex;
  justify-content: center;
  transition: all 0.3s;

  &:hover {
    background-color: #dddddd;
  }

  &.${tabClasses.selected} {
    background-color: white;
    color: #44493a;
  }

  &.${buttonClasses.disabled} {
    opacity: 0.5;
    cursor: not-allowed;
  }
`

const StyledTabPanel = styled(TabPanel)`
  width: 80vw;
  font-family: IBM Plex Sans, sans-serif;
  font-size: 0.875rem;
  display: flex;
  place-content: center;
  place-items: center;
`

const StyledTabsList = styled(TabsList)(
  ({ theme }) => `
  width: auto;
  min-width: 400px;
  padding: 0 50px 0 50px; 
  background-color: rgb(229 231 235);
  border-radius: 100px;
  margin-bottom: 4rem;
  display: flex;
  align-items: center;
  justify-content: center;
  align-content: space-between;
  box-shadow: 0px 4px 8px ${
    theme.palette.mode === 'dark' ? grey[900] : grey[200]
  };
  `
)

export default Styled_Tabs
