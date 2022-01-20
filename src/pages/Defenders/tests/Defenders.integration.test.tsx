import "@testing-library/jest-dom";

import * as React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import { BlockRecruitment } from "../components/CenterContainer/components/BlockRecruitment/BlockRecruitment";
import { RecoilRoot } from "recoil";
import { RecoilObserver } from "components/RecoilObserver";
import { _defenderAtom, _defenderVisibilityAtom } from "../DefendersModel";
import _Defenders from "../Defenders.json";

import config from "./config.module.scss";
import { RightContainer } from "../components/RightContainer/RightContainer";
global.app_config = { CSS_ID: config.CSS_ID };

describe("Integration Test Defenders", () => {
  test("Click Employ Button", () => {
    const onClick = jest.fn();

    render(
      <RecoilRoot>
        <RecoilObserver node={_defenderAtom} onClick={onClick} />
        <BlockRecruitment defender={_Defenders[1]} />
        <RightContainer />
      </RecoilRoot>
    );

    // Empty Click with RecoilObserver
    expect(onClick).toHaveBeenCalledTimes(1);

    expect(screen.getByAltText("avenger").getAttribute("src")).toContain("deadpool");
    fireEvent.click(screen.getByTestId("show-defender"));
    // Click with RecoilObserver then fireEvent
    expect(onClick).toHaveBeenCalledTimes(2);

    expect(screen.getByAltText("avenger").getAttribute("src")).toContain("hulk");
  });

  test("Click Close Popup Button", () => {
    const onClick = jest.fn();

    render(
      <RecoilRoot>
        <RecoilObserver node={_defenderVisibilityAtom} onClick={onClick} />
        <BlockRecruitment defender={_Defenders[1]} />
        <RightContainer />
      </RecoilRoot>
    );

    fireEvent.click(screen.getByTestId("show-defender"));
    fireEvent.click(screen.getByTestId("hide-defender"));

    expect(onClick).toHaveBeenCalledTimes(3);
    // Init RecoilObserver call
    expect(onClick).toHaveBeenCalledWith(false);
    // Click on Employ
    expect(onClick).toHaveBeenCalledWith(true);
    // Click on close-employ
    expect(onClick).toHaveBeenCalledWith(false);
  });

  test("Click Employ Right Container", () => {
    const onClick = jest.fn();

    render(
      <RecoilRoot>
        <RecoilObserver node={_defenderVisibilityAtom} onClick={onClick} />
        <BlockRecruitment defender={_Defenders[1]} />
        <RightContainer />
      </RecoilRoot>
    );

    fireEvent.click(screen.getByTestId("show-defender"));
    fireEvent.click(screen.getByTestId("employ-defender"));

    expect(onClick).toHaveBeenCalledTimes(2);
    // Init RecoilObserver call
    expect(onClick).toHaveBeenCalledWith(false);
    // Click on Employ
    expect(onClick).toHaveBeenCalledWith(true);
    // Click on close-employ
    expect(onClick).toHaveBeenCalledWith(false);
  });
});
