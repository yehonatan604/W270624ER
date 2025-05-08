import axios from "axios";
import { Button, Card } from "flowbite-react";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { TRootState } from "../../store/store";
import { FaHeart } from "react-icons/fa";
import { Tcard } from "../../types/TCard";
import { toast } from "react-toastify";

const Home = () => {
  const [cards, setCards] = useState<Tcard[]>([]);
  const nav = useNavigate();
  const searchWord = useSelector(
    (state: TRootState) => state.searchSlice.searchWord,
  );
  const user = useSelector((state: TRootState) => state.userSlice.user);

  const filterBySearch = () => {
    return cards.filter((card: Tcard) => {
      return (
        card.title.toLowerCase().includes(searchWord.toLowerCase()) ||
        card.subtitle.toLowerCase().includes(searchWord.toLowerCase())
      );
    });
  };

  const likeOrUnlikeCard = async (cardId: string) => {
    try {
      const token = localStorage.getItem("token");

      axios.defaults.headers.common["x-auth-token"] = token;
      await axios.patch(
        "https://monkfish-app-z9uza.ondigitalocean.app/bcard2/cards/" + cardId,
      );

      const card = cards.find((card) => card._id === cardId);

      if (card) {
        const isLiked = card.likes.includes(user?._id + "");
        let cardsArr = [...cards];

        if (isLiked) {
          const card = cardsArr.find((card) => card._id === cardId);
          if (card) {
            card.likes = card?.likes.filter((like) => like !== user?._id + "");
            const cardIndex = cardsArr.findIndex((card) => card._id === cardId);
            cardsArr[cardIndex] = card;
          }
          toast.success("Card unliked successfully");
        } else {
          const card = cardsArr.find((card) => card._id === cardId);
          if (card) {
            card.likes = [...card.likes, user?._id + ""];
            cardsArr = [...cardsArr, card];
          }
          toast.success("Card liked successfully");
        }

        setCards(cardsArr);
      }
    } catch (error) {
      console.log("Error liking/unliking card:", error);
    }
  };

  useEffect(() => {
    const fetchCards = async () => {
      try {
        const response = await axios.get(
          "https://monkfish-app-z9uza.ondigitalocean.app/bcard2/cards",
        );
        setCards(response.data);
      } catch (error) {
        console.error("Error fetching cards:", error);
      }
    };

    fetchCards();
  }, []);

  return (
    <div className="flex flex-col items-center justify-start gap-2">
      <h1 className="text-2xl">Home Page</h1>
      <p className="text-lg">Welcome Home!</p>

      {cards &&
        filterBySearch().map((card) => {
          const isLiked = card.likes.includes(user?._id + ""); // Replace "userId" with the actual user ID
          return (
            <Card key={card._id}>
              <h2>{card.title}</h2>
              <h1>{card.subtitle}</h1>
              {user && (
                <FaHeart
                  className={`${isLiked ? "text-red-500" : "text-gray-500"} cursor-pointer`}
                  onClick={() => likeOrUnlikeCard(card._id)}
                />
              )}
              <Button onClick={() => nav("/card/" + card._id)}>Click</Button>
            </Card>
          );
        })}
    </div>
  );
};

export default Home;
