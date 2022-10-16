import React, { useEffect } from "react";
import { Button } from "antd";
import { Link } from "react-router-dom";
import axios from "axios";

type Props = {};

export const Navigation = (props: Props) => {
    return (
        <div className="navigation">
            <div className="navigation__wrapper">
                <div className="navigation__logo">Logo</div>
                <div className="navigation__links">
                    <Link to="/flowers" className="navigation__link">
                        Flowers
                    </Link>
                    <Link to="/flowers" className="navigation__link">
                        Flowers
                    </Link>
                    <Link to="/flowers" className="navigation__link">
                        Flowers
                    </Link>
                    <div className="navigation__auth">
                        <Link to="/flowers" className="navigation__link">
                            Flowers
                        </Link>
                        <Button>New Account</Button>
                    </div>
                </div>
            </div>
        </div>
    );
};
