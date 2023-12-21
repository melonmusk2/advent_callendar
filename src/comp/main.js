import React from 'react';
import "../index.scss";
import { Link } from "react-router-dom"



const Main = () => {
     const nuh_uh = () => {
        alert('nuh uh');
    
      };
  return (
    <div class="grid">
    <button  class="grid__item grid__item--sun grid__item--lg grid__item--1">
        <Link to="/item1">
        <span   class="grid__item-door">
            1
        </span></Link>
        <span class="grid__item-shadow"></span>
    </button>
    <button class="grid__item grid__item--2">
    <Link to="/item2">
        <span class="grid__item-door">
            2
        </span></Link>
        <span class="grid__item-shadow"></span>
    </button>
    <button class="grid__item grid__item--lg grid__item--3">
    <Link to="/item3">
        <span class="grid__item-door">
            3
        </span></Link>
        <span class="grid__item-shadow"></span>
    </button>
    <button  class="grid__item grid__item--moss grid__item--lg grid__item--4">
    <Link to="/item4">
        <span class="grid__item-door">
            4
        </span></Link>
        <span class="grid__item-shadow"></span>
    </button>
    <button class="grid__item grid__item--5">
    <Link to="/item5">
        <span class="grid__item-door">
            5
        </span></Link>
        <span class="grid__item-shadow"></span>
    </button>
    <button  class="grid__item grid__item--rose grid__item--lg grid__item--6">
    <Link to="/item6">
        <span class="grid__item-door">
            6
        </span></Link>
        <span class="grid__item-shadow"></span>
    </button>
    <button  class="grid__item grid__item--7">
    <Link to="/item7">
        <span class="grid__item-door">
            7
        </span></Link>
        <span class="grid__item-shadow"></span>
    </button>
    <button class="grid__item grid__item--8">
       <Link to="/item8">
        <span class="grid__item-door">
            8
        </span></Link>
        <span class="grid__item-shadow"></span>
    </button>
    <button class="grid__item grid__item--9">
       <Link to="/item9">
        <span class="grid__item-door">
            9
        </span></Link>
        <span class="grid__item-shadow"></span>
    </button>
    <button  class="grid__item grid__item--10">
       <Link to="/item10">
        <span class="grid__item-door">
            10
        </span></Link>
        <span class="grid__item-shadow"></span>
    </button>
    <button class="grid__item grid__item--sky grid__item--11">
       <Link to="/item11">
        <span class="grid__item-door">
            11
        </span></Link>
        <span class="grid__item-shadow"></span>
    </button>
    <button class="grid__item grid__item--12">
       <Link to="/item12">
        <span class="grid__item-door">
            12
        </span></Link>
        <span class="grid__item-shadow"></span>
    </button>
    <button class="grid__item grid__item--moss grid__item--lg grid__item--13">
       <Link to="/item13">
        <span class="grid__item-door">
            13
        </span></Link>
        <span class="grid__item-shadow"></span>
    </button>
    <button class="grid__item grid__item--14">
       <Link to="/item14">
        <span class="grid__item-door">
            14
        </span></Link>
        <span class="grid__item-shadow"></span>
    </button>
    <button class="grid__item grid__item--rose grid__item--15">
       <Link to="/item15">
        <span class="grid__item-door">
            15
        </span></Link>
        <span class="grid__item-shadow"></span>
    </button>
    <button  class="grid__item grid__item--16">
       <Link to="/item16">
        <span class="grid__item-door">
            16
        </span></Link>
        <span class="grid__item-shadow"></span>
    </button>
    <button  class="grid__item grid__item--17">
       <Link to="/item17">
        <span class="grid__item-door">
            17
        </span></Link>
        <span class="grid__item-shadow"></span>
    </button>
    <button class="grid__item grid__item--sky grid__item--18">
       <Link to="/item18">
        <span class="grid__item-door">
            18
        </span></Link>
        <span class="grid__item-shadow"></span>
    </button>
    <button class="grid__item grid__item--rose grid__item--19">
       <Link to="/item19">
        <span class="grid__item-door">
            19
        </span></Link>
        <span class="grid__item-shadow"></span>
    </button>
    <button class="grid__item grid__item--20">
        <Link to="/item20">
        <span class="grid__item-door">
            20
        </span></Link>
        <span class="grid__item-shadow"></span>
    </button>
    <button class="grid__item grid__item--sun grid__item--lg grid__item--21">
       <Link to="/item21">
        <span class="grid__item-door">
            21
        </span></Link>
        <span class="grid__item-shadow"></span>
    </button>
    <button onClick={nuh_uh} class="grid__item  grid__item--sun grid__item--22">
        <span class="grid__item-door">
            22
        </span>
        <span class="grid__item-shadow"></span>
    </button>
    <button onClick={nuh_uh} class="grid__item grid__item--23">
        <span class="grid__item-door">
            23
        </span>
        <span class="grid__item-shadow"></span>
    </button>
    <button onClick={nuh_uh} class="grid__item grid__item--ultimate grid__item--lg grid__item--24">
        <span class="grid__item-door">
            24
        </span>
        <span class="grid__item-shadow"></span>
    </button>
</div>

  );
};

export default Main;
