import styled from 'styled-components'

export const SectionPadding = styled.div`
padding: 4rem 6rem;
`;

export const FlexCenter = styled.div`
display: flex;
justify-content: center;
align-items: center;
`

export const AppBg = styled.div`
    background: url('./assets/bg.png');
    background-position: center;
    background-size: cover;
    background-repeat: repeat;
    background-attachment: fixed;
`;

export const AppWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    min-height: 100vh;
`;

export const AppWrapperInfo = styled.div`
    flex: 1;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;
`;

export const AppWrapperImg = styled.div`
    flex: 1;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    margin-left: 2rem;

    img {
        width: 80%;
    }
`;

export const AppWrapperImgReverse = styled.div`
    justify-content: flex-start;
    margin-right: 2rem;
`;

export const CustomButton = styled.button`
    background-color: var(--color-crimson);
    color: var(--color-black);
    font-family: var(--font-base);
    font-weight: 700;
    letter-spacing: 0.04em;
    line-height: 28px;
    font-size: 16px;
    padding: 0.5rem 1.5rem;
    border-radius: 1px;
    border: none;
    outline: none;
    cursor: pointer;
`;

export const ParaCormorant = styled.p`
    font-family: var(--font-base);
    color: var(--color-white);
    font-weight: 700;
    letter-spacing: 0.04em;
    text-transform: capitalize;
    font-feature-settings: 'tnum' on, 'lnum' on;
    line-height: 29.9px;
    font-size: 23px;
`;

export const ParaOpenSans = styled.p`
    font-family: var(--font-alt);
    color: var(--color-white);
    font-weight: 400;
    letter-spacing: 0.04em;
    text-transform: capitalize;
    line-height: 28px;
    font-size: 16px;
`;

export const HeadTextCormorant = styled.p`
    font-family: var(--font-base);
    color: var(--color-golden);
    font-size: 64px;
    line-height: 83.2px;
    letter-spacing: 0.04em;
    text-transform: capitalize;
`;

export const SpoonImg = styled.img`
width: 45px;
`;