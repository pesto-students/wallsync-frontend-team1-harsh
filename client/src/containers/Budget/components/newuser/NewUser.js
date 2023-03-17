import React, { useState } from "react";
import Button from "../../../../components/button/Button";
import "../../budget.css";
import { useDispatch } from "react-redux";
import { addBudget } from "../../../../context/budget/api";
const NewUser = () => {
  const dispatch = useDispatch();
  const [income, setIncome] = useState("");
  const [limit, setLimit] = useState("");

  const handleBudgetSumbit = (e) => {
    e.preventDefault();

    dispatch(addBudget({ income, limit }));
  };
  if (income && parseInt(limit) > parseInt(income)) {
    throw new Error("Limit cannot be greater than income");
  }
  return (
    <div>
      <form action="" onSubmit={handleBudgetSumbit} className="newUserBudget">
        <input
          type="text"
          name=""
          placeholder="Income"
          onChange={(e) => setIncome(e.target.value)}
        />
        <input
          type="text"
          name=""
          placeholder="Limit"
          onChange={(e) => setLimit(e.target.value)}
        />
        <Button
          type="submit"
          className="createBudgetB"
          buttonName="Start Budget"
        />
      </form>
    </div>
  );
};

export default NewUser;
