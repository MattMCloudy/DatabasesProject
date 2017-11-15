CREATE TABLE Customers (
  IdNo         INT          NOT NULL,
  Name         VARCHAR(25)  NOT NULL,
  PhoneNo      VARCHAR(12)  NOT NULL,
  Address      VARCHAR(256) NOT NULL,
  Email        VARCHAR(30)  NOT NULL,
  Username     VARCHAR(12)  NOT NULL,
  Password     VARCHAR(12)  NOT NULL,
  CreatedDate  DATE         NOT NULL,
  CONSTRAINT CUSTPK
    PRIMARY KEY(IdNo),
  CONSTRAINT USERNMLEN
    CHECK((len(ltrim(rtrim(Username))) > (7))),
  CONSTRAINT PASSWDLEN
    CHECK((len(ltrim(rtrim(Password))) > (7))),
  CONSTRAINT PHONEUNIQ
    UNIQUE(PhoneNo),
  CONSTRAINT EMUNIQ
    UNIQUE(Email),
  CONSTRAINT UNUNIQ
    UNIQUE(Username),
  CONSTRAINT PWUNIQ
    UNIQUE(Password)
);

CREATE TABLE Orders (
  Order_ID            INT      NOT NULL,
  CustomerId          INT      NOT NULL,
  total_amt_paid      DECIMAL  NOT NULL,
  total_price         INT      NOT NULL,
  Is_Paid             BOOLEAN  DEFAULT False,
  CONSTRAINT ORDPK
    PRIMARY KEY(Order_ID),
  CONSTRAINT CUSTFK
    FOREIGN KEY(CustomerId) REFERENCES Customers(IdNo)
    ON DELETE CASCADE ON UPDATE CASCADE
);

CREATE TABLE Products (
  ProductId       INT        NOT NULL,
  OrderId         INT,
  Product_Image   LONGBLOB,
  Description     VARCHAR(256),
  Type            VARCHAR(9) NOT NULL,
  Price           DECIMAL    NOT NULL,
  CONSTRAINT PRDPK
    PRIMARY KEY(ProductId),
  CONSTRAINT ORDFK
    FOREIGN KEY(OrderId) REFERENCES Orders(Order_ID)
    ON DELETE CASCADE  ON UPDATE CASCADE
);

CREATE TABLE Customer_Payments (
  OrderID         INT        NOT NULL,
  CustomerID      INT        NOT NULL,
  Amt_paid         DECIMAL    NOT NULL,
  Payment_ID       INT        NOT NULL,
  CONSTRAINT CPPK
    PRIMARY KEY(Payment_ID),
  CONSTRAINT ORDPAYFK
    FOREIGN KEY(OrderID) REFERENCES Orders(Order_ID)
    ON DELETE CASCADE  ON UPDATE CASCADE,
  CONSTRAINT CUSTPAYFK
    FOREIGN KEY(CustomerID) REFERENCES Customers(IdNo)
    ON DELETE CASCADE   ON UPDATE CASCADE
);