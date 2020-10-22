import React from 'react'
import { createStyles, makeStyles } from '@material-ui/core/styles';
import { Typography, Tabs, Tab, Paper, Button } from '@material-ui/core';
import { grey } from '@material-ui/core/colors';

const useStyles = makeStyles(() =>
    createStyles({
        root: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-evenly',
            width: '100%'
        },
        logo: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
        },
        options: {
            display: 'flex',
            alignItems: 'center'
        },
        logoImage: {
            fontFamily: 'Raleway',
            fontSize: 25,
            fontWeight: 700,
            letterSpacing: 0.6,
            color: grey[700],
            fontStyle: 'italic',
            margin: 10
        },
        tabLabelText: {
            textTransform: 'capitalize',
            color: '#fff'
        },
        signinButton: {
            margin: 10,
            textTransform: 'capitalize',
            fontSize: 15,
            fontWeight: 700,
            color: grey[800]
        },
        createButton: {
            margin: 10
        }
    })
)

type OptionTabsProps = {
    classes?: any,
    value: number,
    handleTabChange(event: React.ChangeEvent<{}>, newValue: number): void
}

function OptionTabs({ classes, value, handleTabChange }: OptionTabsProps) {
    return (
        <div>
            <Tabs
                value={value}
                indicatorColor="primary"
                textColor="primary"
                onChange={handleTabChange}
                aria-label="options-tabs"
            >
                <Tab label={
                    <Typography className={classes.tabLabelText}>
                        courses
                    </Typography>
                }
                />
                <Tab label={
                    <Typography className={classes.tabLabelText}>
                        pricing
                    </Typography>
                }
                />
                <Tab label={
                    <Typography className={classes.tabLabelText}>
                        blog
                    </Typography>
                }
                />
                <Tab label={
                    <Typography className={classes.tabLabelText}>
                        search
                    </Typography>
                }
                />
            </Tabs>
        </div>
    )
}

function Header({ value, handleTabChange }: OptionTabsProps) {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <div className={classes.logo}>
                <Typography className={classes.logoImage} align='center'>
                    e-ducate
                </Typography>
            </div>
            <div className={classes.options}>
                <OptionTabs
                    classes={classes}
                    value={value}
                    handleTabChange={handleTabChange}
                />
            </div>
            <div className={classes.options}>
                <Button
                    className={classes.signinButton}
                    variant='contained'
                    color='secondary'
                >
                    Sign In
                </Button>
                <Button
                    className={classes.createButton}
                    variant='outlined'
                    color='primary'
                >
                    CREATE FREE ACCOUNT
            </Button>
            </div>
        </div>
    )
}

export default Header