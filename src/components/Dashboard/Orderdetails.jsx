import React from "react";

// icons
import { Mail, Phone } from "@mui/icons-material";

// css
import "../Dashboard/Css/Orderdetails.css";

const Orderdetails = () => {
  return (
    <div className="orderdetails">
      <div className="header">
        <div className="header-child" />
        <div className="sales1">
          <div className="sales-child" />
          <b className="order-detail">Order detail</b>
          <hr />
        </div>
      </div>
      <div className="order-id">
        <div className="order-id1">
          <div className="od-1">Order id :</div>
          <div className="od-1">#GHG34</div>
        </div>
      </div>
      <div className="details">
        <div className="customer-details">
          <div className="texxt-content">
            <div className="customer-details1">Customer details</div>
            <div className="texxt-content-child" />
            <div className="name-text">
              <div className="name">
                <div className="c-name">Regullion</div>
              </div>
              <div className="dettails">
                <div className="email">
                  <Mail />
                  <div className="mail">sfsf@gmail.com</div>
                </div>
                <div className="mobile">
                  <Phone />
                  <div className="phone">1*******8</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="shipping-address">
          <div className="texxt-content">
            <div className="customer-details1">Shipping address</div>
            <div className="addressdetails">
              <div className="name">Regullion</div>
              <div className="phone1">1*******8</div>
              <div className="adress">
                <p className="adl1">25</p>
                <p className="adl2">7th Street</p>
                <p className="adl3">TX</p>
              </div>
            </div>
          </div>
        </div>
        <div className="payment-details">
          <div className="cust-details">
            <div className="texxt-content">
              <div className="customer-details1">Payment details</div>
              <div className="details-list">
                <div className="transactions">
                  <div className="payment-method">Transactions :</div>
                  <div className="t-id">2312414</div>
                </div>
                <div className="transactions">
                  <div className="payment-method">Payment method :</div>
                  <div className="p-method">paf</div>
                </div>
                <div className="transactions">
                  <div className="payment-method">Card holder name :</div>
                  <div className="c-holdername">Sergio Regullion</div>
                </div>
                <div className="transactions">
                  <div className="payment-method">Card number :</div>
                  <div className="cno">afaf</div>
                </div>
                <div className="transactions">
                  <div className="payment-method">Total amount :</div>
                  <div className="div3">21</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="product-details">
        <div className="text-content">
          <div className="product-details1">Product details:</div>
          <div className="products-table">
            <table>
              <thead>
                <tr>
                  <th>Product</th>
                  <th>Product Id</th>
                  <th>Price</th>
                  <th>Quantity</th>
                  <th>Total Amount</th>
                </tr>
              </thead>
              <tbody>
                <tr className="list1">
                  <td className="imgtext">
                    <td>
                      <img src="" alt="ff" />
                    </td>
                    <td>
                      <div className="prod-imgn">Shoes</div>
                    </td>
                  </td>
                  <td>
                    <div className="prod-idn">22</div>
                  </td>
                  <td>
                    <div className="price-n">22</div>
                  </td>
                  <td>
                    <div className="quantity">2</div>
                  </td>
                  <td>
                    <div className="t-amount">222</div>
                  </td>
                </tr>

                <tr className="list1">
                  <td className="imgtext">
                    <td>
                      <img src="" alt="ff" />
                    </td>
                    <td>
                      <div className="prod-imgn">Shoes</div>
                    </td>
                  </td>
                  <td>
                    <div className="prod-idn">22</div>
                  </td>
                  <td>
                    <div className="price-n">22</div>
                  </td>
                  <td>
                    <div className="quantity">2</div>
                  </td>
                  <td>
                    <div className="t-amount">222</div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <div className="text-content">
        <div className="overlap-group">
          <div className="text-wrapper">Logistics details</div>
          <div className="logistic-img">
            <img
              src="https://s3-alpha-sig.figma.com/img/bbac/f931/7712ade3835dbe65a300f6fb805345dc?Expires=1696204800&Signature=iNLUfDuEOEJ154BGcFfHKVkddx3WJEUKTjbofUgJtSYNid8llA0amue2MRF-qja~o9set5ajq5pOrbqaOBMkUVCbbZFphPQwTrf011yk8Wf-sTtgEw8YyKP~iZwjaqGny3afO~4nKxJCv1OgQWrm6d4qj4K0pjkuY7PkBXTsABrvf~bvs4NQ317YIw70YIPKUkDoPcbSdp6gcLoSsghVDCxu3jABOiGvj89-TVGcMrFqzLkGHHcSFYXRzWgM4HJ4XnNDGcyYd1pYIxHl35560Oj8OSnKiipEq1MEXsoQO1Jt7AzhtrlyQurKRyFMaZvdfZ2py7x6i4h~Zka2Wu3SQA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
              alt=""
            />
          </div>
          <div className="text-l">
            <div className="name">
              <div className="div">ABX Logistics</div>
              <div className="product_rating">
                {Array(4)
                  .fill()
                  .map((_, i) => (
                    <p>⭐</p>
                  ))}
              </div>
            </div>
            <div className="details-l">
              <div className="text-wrapper-2">11</div>
              <div className="text-wrapper-2">11</div>
              <div className="text-wrapper-2">Id : 3</div>
              <div className="text-wrapper-2">Amount charged : ₹ 65</div>
              <div className="text-wrapper-2">Payment method : ff</div>
            </div>
          </div>
        </div>
        <div className="total-bill">
          <div className="tbtext">Total bill</div>

          <div className="total-billdetails">
            <div className="dt1">
              {" "}
              Subtotal:
              <div className="amt1">28</div>
            </div>
            <div className="dt1">
              Discounts:
              <div className="amt2">29</div>
            </div>
            <div className="dt1">
              Logistics:
              <div className="amt3">29</div>
            </div>
            <div className="dt1">
              Tax:
              <div className="amt4">29</div>
            </div>
          </div>
          <div className="total-amt">
            <div className="amttext">Total amount:</div>

            <div className="amtbold">2324</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Orderdetails;
