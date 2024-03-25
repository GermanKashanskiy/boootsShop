import React, { useState } from "react";
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import './style/accordion.css';
import { GetAuthorizedAccount } from "../../../../routes/AuthAccount";
import { Paper } from "@mui/material";
import { GerOrderProducts, GetUserOrders } from "../../../../api/order/UseOrder";
import OrderItem from "./shared/OrderItem";

const AccordionSection = () => {
  const [expanded, setExpanded] = React.useState<string | false>(false);
  const [account] = useState(GetAuthorizedAccount());

  const handleChange = (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <>
      <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <div className="font-archivo font-900 font-s-1N5">
            PROFILE BIO
          </div>
        </AccordionSummary>
        <AccordionDetails className="font-archivo font-900 d-flex flex-wrap justify-center text-center">
          <div className="d-flex dir-column p-1">
            <div className="font-s-1N1">FIRST NAME</div>
            <div className="data-field">{account?.fName}</div>
          </div>
          <div className="d-flex dir-column p-1">
            <div className="font-s-1N1">LAST NAME</div>
            <div className="data-field">{account?.lName}</div>
          </div>
          <div className="d-flex dir-column p-1">
            <div className="font-s-1N1">PHONE</div>
            <div className="data-field">{account?.phone}</div>
          </div>
          <div className="d-flex dir-column p-1">
            <div className="font-s-1N1">USER NAME</div>
            <div className="data-field">{account?.username}</div>
          </div>
          <div className="d-flex dir-column p-1">
            <div className="font-s-1N1">PASSWORD</div>
            <div className="data-field">{account?.password}</div>
          </div>
          <div className="d-flex dir-column p-1">
            <div className="font-s-1N1">EMAIL</div>
            <div className="data-field">{account?.email}</div>
          </div>
        </AccordionDetails>
      </Accordion>

      <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2bh-content"
          id="panel2bh-header"
        >
          <div className="font-archivo font-900 font-s-1N5">
            DELIVERY DETAILS
          </div>
        </AccordionSummary>
        <AccordionDetails className="font-archivo font-900 d-flex flex-wrap justify-center text-center">
          <div className="d-flex dir-column p-1">
            <div className="font-s-1N1">COUNTRY</div>
            <div className="data-field">{account?.country}</div>
          </div>
          <div className="d-flex dir-column p-1">
            <div className="font-s-1N1">CITY</div>
            <div className="data-field">{account?.city}</div>
          </div>
          <div className="d-flex dir-column p-1">
            <div className="font-s-1N1">STREET</div>
            <div className="data-field">{account?.street}</div>
          </div>
          <div className="d-flex dir-column p-1">
            <div className="font-s-1N1">BUILDING</div>
            <div className="data-field">{account?.building}</div>
          </div>
        </AccordionDetails>
      </Accordion>

      <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3bh-content"
          id="panel3bh-header"
        >
          <div className="font-archivo font-900 font-s-1N5">
            ORDER HISTORY
          </div>
        </AccordionSummary>
        <AccordionDetails>
          {GetUserOrders(account?.accountId || 0).map(order => (
            <div key={order.orderArticle} className="d-flex dir-column font-archivo">
              <div className="d-flex justify-space-between">
                <div className="d-flex dir-column">
                  <div className="font-s-1N1">ORDER ARTICLE</div>
                  <div className="data-field">{order.orderArticle}</div>
                </div>
                <div className="d-flex dir-column">
                  <div className="font-s-1N1">DELIVERED</div>
                  <div className="data-field">{order.deliveryStatus ? "DELIVERED" : "DELIVERY IN PROCESS"}</div>
                </div>
                <div className="d-flex dir-column">
                  <div className="font-s-1N1">ORDER PRICE</div>
                  <div className="data-field">{order.orderPrice}</div>
                </div>
              </div>
              <div className="d-flex dir-column mt-1">
                <div className="font-s-1N1">ORDER ITEMS</div>
                <div className="data-field d-flex">
                  {GerOrderProducts(order.orderArticle).map((product, index) => (
                    <OrderItem item={product} key={`${product.articul}-${index}`} />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </AccordionDetails>
      </Accordion>
    </>
  );
}

export default AccordionSection;