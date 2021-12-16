import React from "react";
import Card from "../Card/Card";

class CardList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: null,
      items: [],
    };
  }
  componentDidMount() {
    fetch(
      "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/props/listing/data/etsy.json"
    ).then(
      async (res) => {
        const data = await res.json();
        console.log(data);
        this.setState({
          isLoaded: false,
          items: data,
        });
      },
      (error) => {
        this.setState({
          isLoaded: true
        });
      }
    );
  }
  render() {
    const { isLoaded, items } = this.state;
    if (isLoaded) {
      return <div>Загрузка...</div>;
    } else {
      return (
          <div className="mt-4 container cm-card-container">
            <div className="cm-card-container__item-card">
              {items.map((item) => {
                return <Card item={item} key={item.listing_id} />;
              })}
            </div>
          </div>
      );
    }
  }
}

export default CardList;
