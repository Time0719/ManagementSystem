
import React, { useState, memo } from 'react';
import { makeStyles, Theme, createStyles } from '../../utilities/use.styles';
import {
  Modal
} from '../../utilities/material-ui.index';
import { InputComponent, SelectComponent, DatePickerComponent } from '../index';


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    paper: {
      position: 'absolute',
      width: '50%',
      backgroundColor: theme.palette.background.paper,
      border: '2px solid #000',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
      top: '10%',
      left: '25%'
    },
  }),
);

export const ModalComponent = memo((props: any) => {
  const classes = useStyles();
  const {
    title,
    visible,
    onChange
  } = props;

  const handleModalClose = () => {
    onChange();
  };

  const handleFieldChange = (field: string, value: string, isValid: boolean) => {
    // showRiskStrategyDetails[field as 'StrategyName' | 'Description'] = value;
    // if (field === 'StrategyName' && title === '新增') {
    //     setIsSubmit(isValid);
    // } else if (title === '编辑') {
    //     setIsSubmit(true);
    // }
  };

  const body = (
    <div className={classes.paper}>
      <h2 id="simple-modal-title">{title}</h2>
      <p id="simple-modal-description">
        <form noValidate autoComplete="off">
          <InputComponent />
          <SelectComponent />
          {/* <DatePickerComponent /> */}
        </form>
      </p>
    </div>
  );

  return (
    <div>
      <Modal
        open={visible}
        onClose={handleModalClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {body}
      </Modal>
    </div>
  );
});
