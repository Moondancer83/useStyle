# Adding useStyles hook for Material-UI Styles

[![Repository](https://img.shields.io/badge/npm-react--use--styles-green)](https://www.npmjs.com/package/react-use-styles)
[![Version](https://img.shields.io/npm/v/react-use-styles)](https://www.npmjs.com/package/react-use-styles)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Build Status](https://travis-ci.com/Moondancer83/useStyle.svg?branch=master)](https://travis-ci.com/Moondancer83/useStyle)

##Motivation
Material UI has a hook creation mechanism that allow users creating JSS based styling. However the syntax has more complexity than it should.
```JSX
import React from "react";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({root: {color: "red"}})

function ComponentWithStyles() {
  let classes = useStyles();

  return <div className={classes.root}/>; // className: makeStyles-root-1-1
}
```

```JSX
import React from "react";
import { makeStyles } from "@material-ui/styles";

const useNamedStyles = makeStyles({root: {color: "red"}}, {classNamePrefix: "Test})

function ComponentWithNamedStyles() {
  let classes = useNamedStyles("Test2", {root: {color: "red"}});

  return <div className={classes.root}/>; // className: Test2-root-1-1
}
```

##Install
`inpm i react-use-styles`

##Usage
```JSX
import React from "react";
import { useStyles, useNamedStyles } from "./useStyles";

function ComponentWithStyles() {
  let classes = useStyles({root: {color: "red"}});

  return <div className={classes.root}/>; // className: makeStyles-root-1-1
}

function ComponentWithNamedStyles() {
  let classes = useNamedStyles("Test2", {root: {color: "red"}});

  return <div className={classes.root}/>; // className: Test2-root-1-1
}
```
