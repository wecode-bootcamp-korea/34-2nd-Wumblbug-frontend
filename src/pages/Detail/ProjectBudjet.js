import React from 'react';
import * as S from './ProjectBudjet.styled';

const ProjectBudjet = ({ budjet_plan }) => {
  return (
    <S.BudjetWrap>
      <S.BudjetTitle> | 프로젝트 예산</S.BudjetTitle>
      <S.BudjetBody id="2">
        <S.BudjetBodyText>{budjet_plan}</S.BudjetBodyText>
      </S.BudjetBody>
    </S.BudjetWrap>
  );
};

export default ProjectBudjet;
