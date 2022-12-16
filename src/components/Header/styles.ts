import styles from 'styled-components';

export const HeaderContainer = styles.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;
    height: 60px;
    background-color: #fff;
    box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.1);
`;

export const Title = styles.h1`
    font-size: 20px;
    font-weight: 700;
    color: #000;
`;