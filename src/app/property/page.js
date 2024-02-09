import React from 'react';

const PropertyPage = () => {
  return (
    <div class="property-details">
        <div class="property-image">
            <img src="/properties/1.jpeg" alt="Property Image"/>
        </div>
        <div class="property-details">
            <div class="content-container">
                <div class="text-container">
                    <h2>Heading 1</h2>
                    <p>Paragraph 1</p>
                    <hr class="separator"/>
                    <h2>Heading 2</h2>
                    <p>Paragraph 2</p>
                    <hr class="separator"/>
                    <h2>Heading 3</h2>
                    <p>Paragraph 3</p>
                    <hr class="separator"/>
                    <h2>Heading 4</h2>
                    <p>Paragraph 4</p>
                    <hr class="separator"/>
                    <h2>Heading 5</h2>
                    <p>Paragraph 5</p>
                    <hr class="separator"/>
                    <h2>Heading 6</h2>
                    <p>Paragraph 6</p>
                    <h2>Heading 1</h2>
                    <p>Paragraph 1</p>
                    <hr class="separator"/>
                    <h2>Heading 2</h2>
                    <p>Paragraph 2</p>
                    <hr class="separator"/>
                    <h2>Heading 3</h2>
                    <p>Paragraph 3</p>
                    <hr class="separator"/>
                    <h2>Heading 4</h2>
                    <p>Paragraph 4</p>
                    <hr class="separator"/>
                    <h2>Heading 5</h2>
                    <p>Paragraph 5</p>
                    <hr class="separator"/>
                    <h2>Heading 6</h2>
                    <p>Paragraph 6</p>
                    <h2>Heading 1</h2>
                    <p>Paragraph 1</p>
                    <hr class="separator"/>
                    <h2>Heading 2</h2>
                    <p>Paragraph 2</p>
                    <hr class="separator"/>
                    <h2>Heading 3</h2>
                    <p>Paragraph 3</p>
                    <hr class="separator"/>
                    <h2>Heading 4</h2>
                    <p>Paragraph 4</p>
                    <hr class="separator"/>
                    <h2>Heading 5</h2>
                    <p>Paragraph 5</p>
                    <hr class="separator"/>
                    <h2>Heading 6</h2>
                    <p>Paragraph 6</p>
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