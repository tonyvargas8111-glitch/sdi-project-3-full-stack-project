CREATE TABLE units (
    unit_id INTEGER GENERATE ALWAYS AS IDENTITY PRIMARY KEY,
    unit_name VARCHAR (50) NOT NULL,
    unit_type VARCHAR (50) NOT NULL,
    uic VARCHAR (20) NOT NULL UNIQUW,
    location VARCHAR(100) NOT NULL,
);

CREATE TABLE personnel (
    personnel_id INTEGER GENERATE ALWAYS AS IDENTITY PRIMARY KEY,
    first_name VARCHAR (50) NOT NULL,
    last_name VARCHAR (50) NOT NULL,
    rank VARCHAR (20) NOT NULL,
    mos VARCHAR (10) NOT NULL,
    unit_id INTEGER NOT NULL,
    email VARCHAR (100) NOT NULL,
    cell VARCHAR (20) NOT NULL,
    status VARCHAR (20) NOT NULL,

    FOREIGN KEY (unit_id) REFERENCEs units(unit_id)
);

CREATE TABLE equipment (
    equipmet_id GENERATE ALWAYS AS IDENTITY PRIMARY KEY,
    equipment_type VARCHAR (50) NOT NULL,
    modle VARCHAR (100) NOT NULL,
    serial_number VARCHAR (50) NOT NULL,
    status VARCHAR (30) NOT NULL,
    location VARCHAR (30) NOT NULL,
);

CREATE TABLE equipment_signed_out (
    sign_out_id INTEGER GENERATE ALWAYS AS IDENTITY KEY,
    personnel_id INTEGER NOT NULL,
    equipment_id INTEGER NOT NULL,
    signed_out_date DATE NOT NULL,
    returned_date DATE,
    signed_out_status VARCHAR (20) NOT NULL,
    
    FOREIGN KEY (personnal_id) REFERENCE personal(personnal_id),
    FOREIGN KEY (equipment_id) REFERNCE equipment(equipment_id),
);

CREATE TABLE maintenance_tickets (
    ticket_id INTEGER GENERATE ALWAYS AS IDENTITY KEY, 
    equipment_id INTEGER NOT NULL,
    reported_by INTEGER NOT NULL,
    problem TEXT NOT NULL,
    priority VARCHAR (10) NOT NULL,
    status VARCHAR (20) NOT NULL,
    created_date DATE NOT NULL,
    resolve_date DATE,
    resolution TEXT,

    FOREIGN KEY (equipment_id) REFERENCES equipment(equipment_id),
    FOREIGN KEY (reported_by) REFERENCES personnel(personnel_id),
);