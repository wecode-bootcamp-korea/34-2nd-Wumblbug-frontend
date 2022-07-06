import React from 'react';
import * as S from './ProjectDetail.styled';
import { Link } from 'react-scroll';

const ProjectDetail = () => {
  return (
    <S.ProjectDetailMain>
      <S.ProjectButtonBox>
        <Link to="1" spy={true} smooth={true}>
          <S.ProjectButton>소개</S.ProjectButton>
        </Link>
        <Link to="2" spy={true} smooth={true}>
          <S.ProjectButton>예산</S.ProjectButton>
        </Link>
      </S.ProjectButtonBox>
    </S.ProjectDetailMain>
  );
};

export default ProjectDetail;
