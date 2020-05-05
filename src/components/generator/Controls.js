import React, { useState } from 'react'
import {
    Typography,
    Slider,
    makeStyles,
    Input,
    ExpansionPanel,
    IconButton,
    Dialog,
    Button,
    DialogActions,
    DialogContent,
    Card,
    TextareaAutosize
} from '@material-ui/core';
import { SketchPicker, BlockPicker, SwatchesPicker, TwitterPicker, CompactPicker } from 'react-color';
import ColorLensIcon from '@material-ui/icons/ColorLens';



const useStyles = makeStyles({
    root: {
        width: 200,
    },
    input: {
        width: 42,
    },
});

export default function Controls() {

    //borderRadius
    const [value1, setValue1] = useState(1)
    //thickness
    const [value2, setValue2] = useState(10)

    //shadow
    const [value3, setValue3] = useState(30)
    const [open, setOpen] = useState(false);

    //bordercolor
    const [borderColor, setBorderColor] = useState('#00000');


    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };


    const handleChangeComplete = (color) => {
        setBorderColor(color.hex);
        console.log(color)
        handleClose();
    };

    const classes = useStyles();

    const handleSliderChange = (event, newValue) => {
        setValue1(newValue);
    };

    const handleInputChange = (event) => {
        setValue1(event.target.value === '' ? '' : Number(event.target.value));
    };

    const handleSliderChange2 = (event, newValue) => {
        setValue2(newValue);
    };

    const handleInputChange2 = (event) => {
        setValue2(event.target.value === '' ? '' : Number(event.target.value));
    };

    const handleSliderChange3 = (event, newValue) => {
        setValue3(newValue);
    };

    const handleInputChange3 = (event) => {
        setValue3(event.target.value === '' ? '' : Number(event.target.value));
    };

    const setText = () => {
        return (`width: ${200}px;
        height: 100px,
        borderRadius: ${value1}%;
        border: ${value2}px black solid;
        borderColor: ${borderColor};
        textAlign: center,
        boxShadow: 0px 10px ${value3}px rgba(20,20,20.7)`)
    }



    return (
        <div style={{ width: 'fit-content', margin: 'auto', border: '10px black', justifyContent: 'center', textAlign: 'center' }}>

            <div style={{ display: 'flex', justifyContent: 'center', margin: '30px' }}>
                <div style={{
                    width: `${200}px`,
                    height: '100px',
                    borderRadius: `${value1}%`,
                    border: `${value2}px solid`,
                    borderColor: `${borderColor}`,
                    textAlign: 'center',
                    boxShadow: `0px 10px ${value3}px rgba(20,20,20.7)`
                }}>
                    <h3>HELLO WORLD</h3>
                </div>
            </div>
            <div style={{ display: 'flex', width: '100%', justifyContent: 'space-evenly' }}>
                <Card style={{ width: 'fit-content', margin: 'auto', height: '300px', display: 'flex', flexFlow: 'column', alignItems: 'center', marginRight: '3em' }}>
                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                        <div style={{ display: 'flex', width: '25em', justifyContent: 'space-evenly', alignItems: 'center', marginTop: '20px' }}>
                            <div>
                                <p>Border Radius</p>
                            </div>
                            <div>
                                <Slider
                                    className={classes.root}
                                    defaultValue={1}
                                    aria-labelledby="discrete-slider"
                                    valueLabelDisplay="auto"
                                    value={value1}
                                    onChange={handleSliderChange}
                                    aria-labelledby="input-slider"

                                    step={5}
                                    marks
                                    min={0}
                                    max={50}
                                />
                            </div>
                            <div style={{ paddingBottom: '20px' }}>
                                <Input
                                    className={classes.input}
                                    value={1}
                                    margin="dense"
                                    onChange={handleInputChange}
                                    inputProps={{
                                        step: 5,
                                        min: 0,
                                        max: 50,
                                        type: 'number',
                                        'aria-labelledby': 'input-slider',
                                    }}
                                />
                            </div>
                        </div>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                        <div style={{ display: 'flex', width: '25em', justifyContent: 'space-evenly', alignItems: 'center' }}>
                            <div>
                                <p>Border Width</p>
                            </div>
                            <div>

                            </div>
                            <div>
                                <Slider
                                    className={classes.root}
                                    defaultValue={1}
                                    aria-labelledby="discrete-slider"
                                    valueLabelDisplay="auto"
                                    value={value2}
                                    onChange={handleSliderChange2}
                                    aria-labelledby="input-slider"

                                    step={5}
                                    marks
                                    min={0}
                                    max={100}
                                />
                            </div>
                            <div style={{ paddingBottom: '20px' }}>
                                <Input
                                    className={classes.input}
                                    value={value2}
                                    margin="dense"
                                    onChange={handleInputChange2}
                                    inputProps={{
                                        step: 5,
                                        min: 0,
                                        max: 100,
                                        type: 'number',
                                        'aria-labelledby': 'input-slider',
                                    }}
                                />
                            </div>
                        </div>

                    </div>
                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                        <div style={{ display: 'flex', width: '20em', justifyContent: 'space-evenly', alignItems: 'center' }}>
                            <div>
                                <p>Box Shadow</p>
                            </div>
                            <div>
                                <Slider
                                    className={classes.root}
                                    defaultValue={1}
                                    aria-labelledby="discrete-slider"
                                    valueLabelDisplay="auto"
                                    value={typeof value3 === 'number' ? value3 : 0}
                                    onChange={handleSliderChange3}
                                    aria-labelledby="input-slider"
                                    step={5}
                                    marks
                                    min={0}
                                    max={50}
                                />
                            </div>
                            <div style={{ paddingBottom: '20px' }}>
                                <Input
                                    className={classes.input}
                                    value={value3}
                                    margin="dense"
                                    onChange={handleInputChange3}
                                    inputProps={{
                                        step: 5,
                                        min: 0,
                                        max: 50,
                                        type: 'number',
                                        'aria-labelledby': 'input-slider',
                                    }}
                                />
                            </div>
                        </div>

                    </div>
                    <div>
                        <IconButton color="primary" onClick={handleClickOpen}>
                            <ColorLensIcon style={{ color: `${borderColor}` }} />
                        </IconButton>
                        <Dialog
                            open={open}
                            onClose={handleClose}
                            className={classes.Dialog}
                            aria-labelledby="alert-dialog-title"
                            aria-describedby="alert-dialog-description"
                        >
                            <DialogContent>
                                <CompactPicker color={borderColor} width={'200px'} onChangeComplete={handleChangeComplete} />
                            </DialogContent>
                        </Dialog>
                    </div>
                </Card>

                <div>
                    <TextareaAutosize
                        required
                        multiline
                        id="filled-required"
                        label="Required"
                        fullWidth={true}
                        defaultValue={
                            `width: ${200}px;
                        height: 100px,
                        borderRadius: ${value1}%;
                        border: ${value2}px black solid;
                        borderColor: ${borderColor};
                        textAlign: center,
                        boxShadow: 0px 10px ${value3}px rgba(20,20,20.7)`
                        }
                        value={setText()}
                        variant="filled"
                    />
                </div>
            </div>
        </div>
    )
}
