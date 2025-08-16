import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setsearchedquery } from './redux/jobslice';

const Filterjob = () => {
  const dispatch = useDispatch();

  const filterdata = [
    {
      filtertype: 'Location',
      array: ['Delhi', 'Lucknow', 'Hyderabad', 'panki', 'Mumbai'],
    },
    {
      filtertype: 'Industry',
      array: ['Fronted Developer', 'Backend Developer', 'Full Stack Developer', 'ml'],
    },
    {
      filtertype: 'Salary(k)',
      array: ['10', '20-40', '40-80'],
    },
  ];

  const [selectedvalue, setselectedvalue] = useState('');

  const changehandler = (e) => {
    const value = e.target.value;
    setselectedvalue(value);
  };

  useEffect(() => {
    if (selectedvalue) {
      dispatch(setsearchedquery(selectedvalue));
    }
  }, [selectedvalue, dispatch]);

  return (
    <div>
      <div className="mx-10">
        <h1 className="font-bold text-center text-xl">Filter Jobs</h1>
        <hr />
        {filterdata.map((data, index) => (
          <div className="mt-5" key={index}>
            <h1 className="font-bold text-lg">{data.filtertype}</h1>
            {data.array.map((item, idx) => {
              const itemid = `id${index}-${idx}`;
              return (
                <div className="flex items-center space-x-2 my-2" key={idx}>
                  <input
                    type="radio"
                    value={item}
                    id={itemid}
                    name={data.filtertype}
                    onChange={changehandler}
                    checked={selectedvalue === item}
                  />
                  <label htmlFor={itemid}>{item}</label>
                </div>
              );
            })}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Filterjob;
