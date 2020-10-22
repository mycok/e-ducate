import React from 'react'
import { createStyles, makeStyles } from '@material-ui/core/styles';

import Header from './header/Header';

const useStyles = makeStyles(() =>
    createStyles({
        root: {
            display: 'flex',
            flexDirection: 'column'
        }
    }));

function LandingPage() {
    const classes = useStyles();
    const [value, setValue] = React.useState(1);

    function handleTabChange(event: React.ChangeEvent<{}>, newValue: number) {
        setValue(newValue)
    }

    return (
        <>
            <div className='bg-image' />
            <div className={`${classes.root} foreground`}>
                <Header
                    value={value}
                    handleTabChange={handleTabChange}
                />
            </div>
        </>
    )
}

export default LandingPage
