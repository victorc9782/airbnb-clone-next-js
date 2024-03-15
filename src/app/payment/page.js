'use client'
 
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { useSearchParams, useRouter } from 'next/navigation';

const PaymentPage = () => {
    const router = useRouter();
    const [propertyData, setPropertyData] = useState(null);
    const searchParams = useSearchParams();
    const propertyId = searchParams.get('id');
    const checkInDate = searchParams.get('checkin');
    const checkOutDate = searchParams.get('checkout');
    const guests = searchParams.get('guests');
    console.log("propertyId: " + propertyId);

    const handleEditDates = () => {
        const queryParams = new URLSearchParams({
            checkin: checkInDate,
            checkout: checkOutDate,
            guests: guests
        }).toString();
        router.push(`/property/${propertyId}?${queryParams}`);
    };
    
    const handleEditGuests = () => {
        const queryParams = new URLSearchParams({
            checkin: checkInDate,
            checkout: checkOutDate,
            guests: guests
        }).toString();
        router.push(`/property/${propertyId}?${queryParams}`);
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`/api/property/id/${propertyId}`);
                if (response.ok) {
                    const data = await response.json();
                    setPropertyData(data.property);
                    console.log(data.property);
                } else {
                    throw new Error('Failed to fetch property data');
                }
            } catch (error) {
                console.error(error);
            }
        };

        if (propertyId) {
            fetchData();
        }
    }, [propertyId]);

    if (!propertyData) {
        return <div>Loading...</div>;
    }
    
    return (
        <div class="property-details">
            <div class="property-image">
                <Image src={'/properties/' + propertyData.image} alt="Property Image" width={1500} height={800}></Image>
            </div>
            <div class="property-details">
                <div class="content-container">
                    <div class="parent">
                        <div class="child1">
                            <div class="request-to-book">
                                <h1>Request to book:</h1>
                                <div class="row">
                                    <h2>{propertyData.title}</h2>
                                </div>
                                <div class="row">
                                    <div class="left">
                                        Dates: <span id="booking-dates">{checkInDate} to {checkOutDate}</span>
                                    </div>
                                    <div class="right">
                                        <a href="#" id="edit-dates" onClick={handleEditDates}>Edit</a>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="left">
                                        Guests: <span id="booking-guests">{guests}</span>
                                    </div>
                                    <div class="right">
                                        <a href="#" id="edit-guests" onClick={handleEditGuests}>Edit</a>
                                    </div>
                                </div>
                                <hr/>
                                <h2>Travel insurance</h2>
                                <div class="row">
                                    <div class="left">
                                        <p>Add travel insurance for $20!<br/>Get reimbursed if you need to cancel due to illness, flight delays and more.<br/><a href="#">What&#39;s covered</a></p>
                                    </div>
                                </div>
                                <div class="right">
                                    <button>Add</button>
                                </div>
                            </div>
                            <hr/>
                            <form class="payment-form">
                                <div class="row">
                                    <h2>Credit card payment</h2>
                                </div>
                                <div class="row">
                                    <label for="card-holder">Name on card:</label>
                                    <input type="text" id="card-holder" name="card-holder" required/>
                                </div>
                                <div class="row">
                                    <label for="card-number">Card number:</label>
                                    <input type="text" id="card-number" name="card-number" required/>
                                </div>
                                <div class="row">
                                    <label for="expiry-date">Expiry date:</label>
                                    <input type="text" id="expiry-date" name="expiry-date" required/>
                                </div>
                                <div class="row">
                                    <label for="cvv">CVV:</label>
                                    <input type="text" id="cvv" name="cvv" required/>
                                </div>
                            </form>
                            <hr/>
                            <div class="row">
                                <h2>Message the host</h2>
                            </div>
                            <div class="row">
                                <p>Let the host know why you&#39;re travelling and when you&#39;ll check in.</p>
                            </div>
                            <div class="row">
                                <textarea id="message" name="message"></textarea>
                            </div>
                            <hr/>
                            <div class="row">
                                <h2>Cancellation policy</h2>
                            </div>
                            <div class="row">
                                <p>Free cancellation for 48 hours. Cancel before 29 May for a partial refund. <a href="#">Learn more</a></p>
                            </div>
                            <hr/>
                            <div class="row">
                                <a href="/confirm"><button id="request-to-book">Request to book</button></a>
                            </div>
                        </div>
                        <div class="frame-container">
                            <div class="reservation-form">
                                <form>
                                    <div class="row">
                                        <label for="checkin">Check-in Date:</label>
                                        <input type="date" id="checkin" name="checkin" required/>
                                    </div>
                                    <div class="row">
                                        <label for="checkout">Checkout Date:</label>
                                        <input type="date" id="checkout" name="checkout" required/>
                                    </div>
                                    <div class="row">
                                        <label for="guests">Number of Guests:</label>
                                        <select id="guests" name="guests">
                                            <option value="1">1 guest</option>
                                            <option value="2">2 guests</option>
                                            <option value="3">3 guests</option>
                                        </select>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default PaymentPage;