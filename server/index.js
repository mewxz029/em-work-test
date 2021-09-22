const express = require("express");
const app = express();
const mysql = require('mysql');
const cors = require('cors');

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    user: "root",
    host: "localhost",
    password: "",
    database: "db_tour"
})

app.get("/api/region", (req, res) => {
    db.query("SELECT * FROM region", (err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.send(result);
        }
    });
});

app.get("/api/province", (req, res) => {
    db.query("SELECT * FROM province", (err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.send(result);
        }
    })
})

app.get("/api/attraction_type", (req, res) => {
    db.query("SELECT * FROM attraction_type", (err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.send(result);
        }
    })
})

app.get("/api/attraction", (req, res) => {
    db.query("SELECT attraction.ID, attraction.ProvinceID, attraction.AttractionTypeID, attraction.ImageURL, attraction.Name, attraction.Description, attraction.Created, attraction.Modified, province.Name AS ProvinceName, region.Name AS RegionName, attraction_type.Name AS AttractionTypeName FROM (((attraction INNER JOIN province ON attraction.ProvinceID = province.ID) INNER JOIN region ON province.RegionID = region.ID)) INNER JOIN attraction_type ON attraction.AttractionTypeID = attraction_type.ID;", (err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.send(result);
        }
    })
})

app.post("/api/create", (req, res) => {
    const Name = req.body.Name;
    const ProvinceID = req.body.ProvinceID;
    const AttractionTypeID = req.body.AttractionTypeID;
    const ImageURL = req.body.ImageURL;
    const Description = req.body.Description;
    const Created = req.body.Created;
    const Modified = req.body.Modified;

    db.query(
        `INSERT INTO attraction (Name, ProvinceID, AttractionTypeID, ImageURL, Description, Created, Modified) VALUES ('${Name}',${ProvinceID},${AttractionTypeID},'${ImageURL}','${Description}','${Created}','${Modified}')`,
        (err, result) => {
            if (err) {
                console.log(err);
            } else {
                res.send("Values Inserted");
            }
        }
    );
});

app.put("/api/update", (req, res) => {
    const ID = req.body.ID
    const Name = req.body.Name;
    const ProvinceID = req.body.ProvinceID;
    const AttractionTypeID = req.body.AttractionTypeID;
    const ImageURL = req.body.ImageURL;
    const Description = req.body.Description;
    const Modified = req.body.Modified;

    db.query(
        `UPDATE attraction SET Name = '${Name}', ProvinceID = ${ProvinceID}, AttractionTypeID = ${AttractionTypeID}, ImageURL = '${ImageURL}', Description = '${Description}', Modified = '${Modified}' WHERE ID = ${ID}`,
        (err, result) => {
            if (err) {
                console.log(err);
            } else {
                res.send("Values Updated");
            }
        }
    );
});

app.get("/api/attraction/:id", (req, res) => {
    const ID = req.params.id;
    db.query(`SELECT * FROM attraction WHERE ID = ${ID}`, 
        (err, result) => {
            if (err) {
                console.log(err);
            } else {
                res.send(result);
            }
        }
    );
});

app.delete("/api/delete/:id", (req, res) => {
    const ID = req.params.id;
    db.query(`DELETE FROM attraction WHERE ID = ${ID}`, (err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.send(result);
        }
    });
});

app.listen(3001, () => {
    console.log("Server is running on port 3001");
}) 