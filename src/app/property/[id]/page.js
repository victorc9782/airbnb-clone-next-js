"use client"
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { getPropertyById } from "@/app/property/utils";

const PropertyPage = ({ params }) => {
    const [property, setProperty] = useState({});
    useEffect(() =>{
        setProperty(getPropertyById(params.id));
    }, []);

    return (
        <div className="container mx-auto max-w-90">
            <div className="flex justify-center m-20">
                <Image 
                    src={`/properties/${property.image}`}
                    alt="Property Image"
                    width={2000}
                    height={1498}/>
            </div>
            <div className="container mx-auto flex">
                <div className="mx-auto flex">
                    <div className="w-70 inline-block p-20 box-border">
                        <h3 className="text-xl font-bold mb-2">{property.title}</h3>
                        <p className="text-base text-gray-500 mb-1">{`${property.typeOfPlace} · ${property.guests} guests · ${property.bedrooms} bedrooms · ${property.beds} beds · ${property.baths} baths`}</p>
                        <p className="text-sm text-gray-500 mb-2">{property.amenities?.join(' · ')}</p>
                        <p className="text-base font-bold">${property.price} / night</p>
                    </div>
                    <div class="frame-container">
                        <div class="reservation-form">
                            <div class="form">
                                <label for="checkin">Check-in Date:</label>
                                <input type="date" id="checkin" name="checkin" required/>
                        
                                <label for="checkout">Checkout Date:</label>
                                <input type="date" id="checkout" name="checkout" required/>
                        
                                <label for="guests">Number of Guests:</label>
                                <select id="guests" name="guests">
                                    <option value="1">1 guest</option>
                                    <option value="2">2 guests</option>
                                    <option value="3">3 guests</option>
                                </select>
                                <a href="/payment"><button type="submit">Reserve</button></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default PropertyPage;