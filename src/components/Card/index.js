import { DeleteOutlined, DownOutlined, UpOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import styled from 'styled-components';

function Card({
  title,
  desc,
  children,
  onUpButtonClick,
  onDownButtonClick,
  onDeleteButtonClick,
}) {
  return (
    <CardWrapper>
      <Head>
        <Title>{title}</Title>
        <Desc>{desc}</Desc>
      </Head>
      <Body>{children}</Body>

      <ButtonGroupWrapper>
        <ButtonGroup>
          <Button type="text" onClick={onUpButtonClick} icon={<UpOutlined />} />
          <Button
            type="text"
            onClick={onDeleteButtonClick}
            icon={<DeleteOutlined />}
          />
          <Button
            type="text"
            onClick={onDownButtonClick}
            icon={<DownOutlined />}
          />
        </ButtonGroup>
      </ButtonGroupWrapper>
    </CardWrapper>
  );
}

const ButtonGroupWrapper = styled.div`
  position: absolute;
  left: calc(100%);
  top: 0;
  display: none;
`;

const ButtonGroup = styled.div`
  background: #fff;
  margin-left: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
`;

const CardWrapper = styled.div`
  position: relative;
  width: 400px;
  margin: 30px auto;
  border: 1px solid #ddd;
  background: #fff;

  &:hover ${ButtonGroupWrapper} {
    display: block;
  }
`;

const Head = styled.div`
  border-bottom: 1px solid #ddd;
  padding: 15px;
`;

const Title = styled.div`
  font-weight: 600;
`;

const Desc = styled.div`
  margin-left: 5px;
  color: #666;
`;

const Body = styled.div`
  padding: 15px;
`;

export default Card;
