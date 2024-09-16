import React, { useEffect, useLayoutEffect, useState } from "react";
import MainContainer from "./MainContainer";
import NavigateComponent from "./NavigateComponent";
import { Box, Card, CardContent } from "@mui/material";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import { products } from "../pages/api/products";
import useSound from "use-sound";

type IInfoCard = {
  props: Array<Object>
};

const CardInformationProducts = (props: IInfoCard) => {
  const [arrayInfoUser, setArrayInfoUser] = useState([...props.props]);
  const [playEcho] = useSound("/delete.mp3");

  const handleDeleteItem = id => {
    const updatedArray = arrayInfoUser.filter(el => el.id !== id);
    playEcho();
    setArrayInfoUser(updatedArray);
  };

  useLayoutEffect(() => {}, [arrayInfoUser, handleDeleteItem]);

  return (
    <>
      <MainContainer>
        {arrayInfoUser.map((el, idx) => {
          return (
            <Box key={idx} className="product-card">
              <Card>
                <CardContent className="product-card__cards">
                  <pre>
                    <NavigateComponent
                      path={`infoCard/${el.id}`}
                      text={el.name + "\n"}
                    >
                      id: {el.id} <br />
                    </NavigateComponent>
                    name: {el.name} <br />
                    price: {el.price} <br />
                    created At: {new Date(el.createdAt).toLocaleDateString()}
                  </pre>
                  <Box className="product-card__cards-icon">
                    <DeleteForeverIcon
                      onClick={() => handleDeleteItem(el.id)}
                    />
                  </Box>
                </CardContent>
              </Card>
            </Box>
          );
        })}
      </MainContainer>
    </>
  );
};

export default CardInformationProducts;
