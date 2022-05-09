import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import '../../styles/photo/album.css';
import CameraAltOutlinedIcon from '@material-ui/icons/CameraAltOutlined';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import CloseRoundedIcon from '@material-ui/icons/CloseRounded';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';
import enterPhotoBooth from '../../assets/enterPhotoBooth.png';

function MakeBoothButton() {
  const history = useHistory();
  const [makeBoothDialogOpen, setmakeBoothDialogOpen] = useState(false);
  const [colorDialogOpen, setColorDialogOpen] = useState(false);
  const [peopleNum, setPeopleNum] = useState(4);
  const [numListOpen, setnumListOpen] = useState(false);
  const closeMakeDialog = () => {
    setmakeBoothDialogOpen(false);
    setPeopleNum(4);
    setnumListOpen(false);
  };

  const closeColorDialog = () => {
    setColorDialogOpen(false);
    setmakeBoothDialogOpen(false);
  };

  const moveColorDialog = () => {
    setColorDialogOpen(true);
    // 모달 넘어갈 때 깜빡여서 수정
    // setmakeBoothDialogOpen(false);
  };

  const movePhotobooth = () => {
    history.push({ pathname: '/album/photobooth' });
    setColorDialogOpen(false);
    setmakeBoothDialogOpen(false);
  };

  return (
    <div>
      <button
        type="button"
        className="album-btn"
        onClick={() => setmakeBoothDialogOpen(true)}
      >
        <CameraAltOutlinedIcon className="album-btn-icon" fontSize="small" />
        포토부스 생성하기
      </button>
      <Dialog
        open={makeBoothDialogOpen}
        onClose={closeMakeDialog}
        id="dialog"
        className="photobooth-dialog"
        aria-labelledby="dialog-container"
        aria-describedby="dialog-description"
        PaperProps={{
          sx: {
            minWidth: 800,
            borderRadius: 2.7,
          },
        }}
      >
        <DialogTitle id="dialog-container" className="dialog-header">
          <div className="dialog-title">
            <p>입장하기</p>
          </div>
          <Button
            sx={{
              minWidth: 36,
              height: 49,
            }}
            onClick={() => {
              closeMakeDialog();
            }}
          >
            <CloseRoundedIcon
              sx={{
                fontSize: 29,
              }}
            />
          </Button>
        </DialogTitle>
        <div className="dialog-body-box">
          <div className="dialog-body photobooth-dialog-body">
            <img src={enterPhotoBooth} alt="입장하기" />
            <p className="photobooth-dialog-title">포토부스 생성하기</p>
            <p>입장할 인원 수를 정해주세요</p>

            <div className="make-dialog-input-box">
              <button
                type="button"
                onClick={() => setnumListOpen(!numListOpen)}
                className="make-dialog-input"
              >
                <div>
                  <p>{peopleNum}</p>
                </div>
                {numListOpen ? (
                  <ArrowDropUpIcon
                    color="action"
                    className="make-dialog-input-btn"
                  />
                ) : (
                  <ArrowDropDownIcon
                    color="action"
                    className="make-dialog-input-btn"
                  />
                )}
              </button>
              <div className="photobooth-num-list">
                {numListOpen
                  ? [4, 3, 2].map(num => (
                      <button
                        type="button"
                        className="photobooth-num-listitem"
                        key={num}
                        onClick={() => [
                          setPeopleNum(num),
                          setnumListOpen(false),
                        ]}
                      >
                        {num}
                      </button>
                    ))
                  : ''}
              </div>
            </div>
            <button
              type="button"
              className="photobooth-dialog-btn"
              onClick={() => moveColorDialog()}
            >
              생성하기
            </button>
          </div>
        </div>
      </Dialog>
      <Dialog
        open={colorDialogOpen}
        onClose={closeColorDialog}
        id="dialog"
        className="photobooth-dialog"
        aria-labelledby="dialog-container"
        aria-describedby="dialog-description"
        PaperProps={{
          sx: {
            minWidth: 800,
            borderRadius: 2.7,
          },
        }}
      >
        <DialogTitle id="dialog-container" className="dialog-header">
          <div className="dialog-title">
            <p>생성하기</p>
          </div>
          <Button
            sx={{
              minWidth: 36,
              height: 49,
            }}
            onClick={() => {
              closeColorDialog();
            }}
          >
            <CloseRoundedIcon
              sx={{
                fontSize: 29,
              }}
            />
          </Button>
        </DialogTitle>
        <div className="dialog-body-box">
          <div className="dialog-body photobooth-dialog-body">
            <p>배경색을 정해주세요</p>
            <button
              type="button"
              className="photobooth-dialog-btn"
              onClick={() => movePhotobooth()}
            >
              선택완료
            </button>
          </div>
        </div>
      </Dialog>
    </div>
  );
}

export default MakeBoothButton;
