--
-- PostgreSQL database dump
--

-- Dumped from database version 14.17 (Ubuntu 14.17-0ubuntu0.22.04.1)
-- Dumped by pg_dump version 14.17 (Ubuntu 14.17-0ubuntu0.22.04.1)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: accessories; Type: TABLE; Schema: public; Owner: rob
--

CREATE TABLE public.accessories (
    id integer NOT NULL,
    type text NOT NULL,
    name text NOT NULL,
    introduction text,
    description text,
    image_url text,
    category text
);


ALTER TABLE public.accessories OWNER TO rob;

--
-- Name: accessories_id_seq; Type: SEQUENCE; Schema: public; Owner: rob
--

CREATE SEQUENCE public.accessories_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.accessories_id_seq OWNER TO rob;

--
-- Name: accessories_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: rob
--

ALTER SEQUENCE public.accessories_id_seq OWNED BY public.accessories.id;


--
-- Name: accessory_prices; Type: TABLE; Schema: public; Owner: rob
--

CREATE TABLE public.accessory_prices (
    id integer NOT NULL,
    accessory_id integer,
    size text,
    price numeric(10,2) NOT NULL,
    CONSTRAINT accessory_prices_size_check CHECK ((size = ANY (ARRAY['M'::text, 'L'::text, 'XL'::text])))
);


ALTER TABLE public.accessory_prices OWNER TO rob;

--
-- Name: accessory_prices_id_seq; Type: SEQUENCE; Schema: public; Owner: rob
--

CREATE SEQUENCE public.accessory_prices_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.accessory_prices_id_seq OWNER TO rob;

--
-- Name: accessory_prices_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: rob
--

ALTER SEQUENCE public.accessory_prices_id_seq OWNED BY public.accessory_prices.id;


--
-- Name: bikes; Type: TABLE; Schema: public; Owner: rob
--

CREATE TABLE public.bikes (
    id integer NOT NULL,
    type text NOT NULL,
    name text NOT NULL,
    introduction text,
    description text,
    price numeric(10,2) NOT NULL,
    image_url text
);


ALTER TABLE public.bikes OWNER TO rob;

--
-- Name: bikes_id_seq; Type: SEQUENCE; Schema: public; Owner: rob
--

CREATE SEQUENCE public.bikes_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.bikes_id_seq OWNER TO rob;

--
-- Name: bikes_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: rob
--

ALTER SEQUENCE public.bikes_id_seq OWNED BY public.bikes.id;


--
-- Name: reviews; Type: TABLE; Schema: public; Owner: rob
--

CREATE TABLE public.reviews (
    id integer NOT NULL,
    item_type text NOT NULL,
    item_id integer NOT NULL,
    rating integer,
    review text,
    name text,
    email text,
    CONSTRAINT reviews_item_type_check CHECK ((item_type = ANY (ARRAY['bike'::text, 'accessory'::text]))),
    CONSTRAINT reviews_rating_check CHECK (((rating >= 1) AND (rating <= 5)))
);


ALTER TABLE public.reviews OWNER TO rob;

--
-- Name: reviews_id_seq; Type: SEQUENCE; Schema: public; Owner: rob
--

CREATE SEQUENCE public.reviews_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.reviews_id_seq OWNER TO rob;

--
-- Name: reviews_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: rob
--

ALTER SEQUENCE public.reviews_id_seq OWNED BY public.reviews.id;


--
-- Name: accessories id; Type: DEFAULT; Schema: public; Owner: rob
--

ALTER TABLE ONLY public.accessories ALTER COLUMN id SET DEFAULT nextval('public.accessories_id_seq'::regclass);


--
-- Name: accessory_prices id; Type: DEFAULT; Schema: public; Owner: rob
--

ALTER TABLE ONLY public.accessory_prices ALTER COLUMN id SET DEFAULT nextval('public.accessory_prices_id_seq'::regclass);


--
-- Name: bikes id; Type: DEFAULT; Schema: public; Owner: rob
--

ALTER TABLE ONLY public.bikes ALTER COLUMN id SET DEFAULT nextval('public.bikes_id_seq'::regclass);


--
-- Name: reviews id; Type: DEFAULT; Schema: public; Owner: rob
--

ALTER TABLE ONLY public.reviews ALTER COLUMN id SET DEFAULT nextval('public.reviews_id_seq'::regclass);


--
-- Data for Name: accessories; Type: TABLE DATA; Schema: public; Owner: rob
--

COPY public.accessories (id, type, name, introduction, description, image_url, category) FROM stdin;
1	Accessories	Bicycle Gloves Blue	Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.	Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.	https://websitedemos.net/cycle-shop-02/wp-content/uploads/sites/789/2021/04/accessories-4.jpg	gloves
2	Accessories	Bicycle Gloves Gold	Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.	Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.	https://websitedemos.net/cycle-shop-02/wp-content/uploads/sites/789/2021/03/accessories-4.jpg	gloves
3	Accessories	Bicycle Gloves Pink	Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.	Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.	https://websitedemos.net/cycle-shop-02/wp-content/uploads/sites/789/2021/04/accessories-5.jpg	gloves
4	Accessories	Bicycle Gloves Red	Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.	Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.	https://websitedemos.net/cycle-shop-02/wp-content/uploads/sites/789/2021/03/accessories-3.jpg	gloves
5	Accessories	Bicycle Gloves Yellow	Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.	Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.	https://websitedemos.net/cycle-shop-02/wp-content/uploads/sites/789/2021/04/accessories-6.jpg	gloves
6	Accessories	Bicycle Helmet Blue	Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.	Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.	https://websitedemos.net/cycle-shop-02/wp-content/uploads/sites/789/2021/04/helmet-5.jpg	helmet
7	Accessories	Bicycle Helmet Green	Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.	Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.	https://websitedemos.net/cycle-shop-02/wp-content/uploads/sites/789/2021/04/helmet-3.jpg	helmet
8	Accessories	Bicycle Helmet Pink	Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.	Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.	https://websitedemos.net/cycle-shop-02/wp-content/uploads/sites/789/2021/04/helmet-1.jpg	helmet
9	Accessories	Bicycle Helmet Red	Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.	Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.	https://websitedemos.net/cycle-shop-02/wp-content/uploads/sites/789/2021/04/helmet-4.jpg	helmet
10	Accessories	Bicycle Helmet Sky Blue	Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.	Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.	https://websitedemos.net/cycle-shop-02/wp-content/uploads/sites/789/2021/04/helmet-2.jpg	helmet
\.


--
-- Data for Name: accessory_prices; Type: TABLE DATA; Schema: public; Owner: rob
--

COPY public.accessory_prices (id, accessory_id, size, price) FROM stdin;
1	1	L	27.00
2	1	M	30.00
3	1	XL	35.00
4	2	L	30.00
5	2	M	40.00
6	2	XL	50.00
7	3	L	25.00
8	3	M	28.00
9	3	XL	32.00
10	4	L	45.00
11	4	M	55.00
12	4	XL	65.00
13	5	L	30.00
14	5	M	35.00
15	5	XL	40.00
16	6	L	125.00
17	6	M	130.00
18	6	XL	135.00
19	7	L	135.00
20	7	M	145.00
21	7	XL	160.00
22	8	L	180.00
23	8	M	190.00
24	8	XL	200.00
25	9	L	200.00
26	9	M	215.00
27	9	XL	225.00
28	10	L	150.00
29	10	M	165.00
30	10	XL	175.00
\.


--
-- Data for Name: bikes; Type: TABLE DATA; Schema: public; Owner: rob
--

COPY public.bikes (id, type, name, introduction, description, price, image_url) FROM stdin;
1	Bicycles	Kryo X26 MTB – Model K	Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.	Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.	350.00	https://websitedemos.net/cycle-shop-02/wp-content/uploads/sites/789/2021/03/bicycle-7.jpg
2	Bicycles	Kryo X26 MTB – Model X	Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.	Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.	350.00	https://websitedemos.net/cycle-shop-02/wp-content/uploads/sites/789/2021/03/bicycle-1.jpg
3	Bicycles	Kryo X26 MTB – Model Y	Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.	Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.	350.00	https://websitedemos.net/cycle-shop-02/wp-content/uploads/sites/789/2021/03/bicycle-5.jpg
4	Bicycles	Kryo X26 MTB – Model Z	Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.	Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.	350.00	https://websitedemos.net/cycle-shop-02/wp-content/uploads/sites/789/2021/03/bicycle-4.jpg
\.


--
-- Data for Name: reviews; Type: TABLE DATA; Schema: public; Owner: rob
--

COPY public.reviews (id, item_type, item_id, rating, review, name, email) FROM stdin;
\.


--
-- Name: accessories_id_seq; Type: SEQUENCE SET; Schema: public; Owner: rob
--

SELECT pg_catalog.setval('public.accessories_id_seq', 10, true);


--
-- Name: accessory_prices_id_seq; Type: SEQUENCE SET; Schema: public; Owner: rob
--

SELECT pg_catalog.setval('public.accessory_prices_id_seq', 30, true);


--
-- Name: bikes_id_seq; Type: SEQUENCE SET; Schema: public; Owner: rob
--

SELECT pg_catalog.setval('public.bikes_id_seq', 4, true);


--
-- Name: reviews_id_seq; Type: SEQUENCE SET; Schema: public; Owner: rob
--

SELECT pg_catalog.setval('public.reviews_id_seq', 1, false);


--
-- Name: accessories accessories_pkey; Type: CONSTRAINT; Schema: public; Owner: rob
--

ALTER TABLE ONLY public.accessories
    ADD CONSTRAINT accessories_pkey PRIMARY KEY (id);


--
-- Name: accessory_prices accessory_prices_pkey; Type: CONSTRAINT; Schema: public; Owner: rob
--

ALTER TABLE ONLY public.accessory_prices
    ADD CONSTRAINT accessory_prices_pkey PRIMARY KEY (id);


--
-- Name: bikes bikes_pkey; Type: CONSTRAINT; Schema: public; Owner: rob
--

ALTER TABLE ONLY public.bikes
    ADD CONSTRAINT bikes_pkey PRIMARY KEY (id);


--
-- Name: reviews reviews_pkey; Type: CONSTRAINT; Schema: public; Owner: rob
--

ALTER TABLE ONLY public.reviews
    ADD CONSTRAINT reviews_pkey PRIMARY KEY (id);


--
-- Name: accessory_prices accessory_prices_accessory_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: rob
--

ALTER TABLE ONLY public.accessory_prices
    ADD CONSTRAINT accessory_prices_accessory_id_fkey FOREIGN KEY (accessory_id) REFERENCES public.accessories(id) ON DELETE CASCADE;


--
-- PostgreSQL database dump complete
--

