import axios from "axios";
import { Button, Card } from "flowbite-react";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { TRootState } from "../../store/store";

const Home = () => {
  const [cards, setCards] = useState<
    { _id: string; title: string; subtitle: string }[]
  >([]);
  const nav = useNavigate();
  const searchWord = useSelector(
    (state: TRootState) => state.searchSlice.searchWord,
  );

  const filterBySearch = () => {
    return cards.filter((card) => {
      return (
        card.title.toLowerCase().includes(searchWord.toLowerCase()) ||
        card.subtitle.toLowerCase().includes(searchWord.toLowerCase())
      );
    });
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
        filterBySearch().map((card) => (
          <Card key={card._id}>
            <h2>{card.title}</h2>
            <h1>{card.subtitle}</h1>
            <Button onClick={() => nav("/card/" + card._id)}>Click</Button>
          </Card>
        ))}
    </div>
  );
};

export default Home;
