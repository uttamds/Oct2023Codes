import React, { Component } from "react";
import { carddata } from "./card_data";
import { v4 as uuidv4 } from "uuid";
export default function Advt() {
  return (
    carddata &&
    carddata.map((record) => {
      return (
        <>
          Category : <p>{record.Category}</p>
          {record.Model.map((cardata, key) => {
            return (
              <div key={cardata.id}>
            
                <p>{cardata.carcode}</p>
                <p>{cardata.carname}</p>
                {
                
                    cardata.Cost.map((costdata, key)=>{
                        return(
                            <>
                                <div key={key}>
                                <h5>Cost data for car # {costdata.cost_id} index = {key}</h5>
                                   <p>{costdata.gst}</p>
                                   <p>{costdata.discount}</p>
                                </div>
                            </>
                        )

                    }

                    )
                }
              </div>
            );
          })}
        </>
      );
    })
  );
}
