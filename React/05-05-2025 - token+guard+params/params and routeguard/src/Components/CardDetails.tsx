import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const CardDetails = () => {
  const [card, setCard] = useState<any>();
  const { id } = useParams<{ id: string }>();

  useEffect(() => {
    const fetchCardDetails = async () => {
      try {
        const response = await axios.get(
          `https://monkfish-app-z9uza.ondigitalocean.app/bcard2/cards/${id}`,
        );

        setCard(response.data);
      } catch (error) {
        console.error("Error fetching card details:", error);
      }
    };

    fetchCardDetails();
  }, [id]);

  return (
    <div>
      <h1>Card Details</h1>
      {card && <h3>{card.title}</h3>}
    </div>
  );
};

export default CardDetails;
