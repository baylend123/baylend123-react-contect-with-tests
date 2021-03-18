import { useCoffee } from "../context/CoffeeContext";

const SetCoffeeBean = ({ coffeeBeans }) => {
  const { coffeeBean, setCoffeeBeanId } = useCoffee();
  return (
    <div className="set-coffee-bean">
      <h2>Select a Coffee Bean</h2>
      {console.log(coffeeBean.id)}
      <select
        name="coffee-bean"
        onChange={(e) => setCoffeeBeanId(e.target.value)}
        value={3}
      >
        {coffeeBeans.map((bean) => (
          <option key={bean.id} value={bean.id}>
            {bean.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SetCoffeeBean;
