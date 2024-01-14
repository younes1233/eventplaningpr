    const { query } = require("../database/db");

    const getAboutUs = async () => {
    let sql = `SELECT * FROM AboutUs`;
    const aboutUs = await query(sql);
    return aboutUs;
    };

    const getAbout = (aboutId) => {
    let sql = `SELECT * FROM AboutUs WHERE AboutID = ?`;
    const about = query(sql, [aboutId]);
    return about;
    };

    const insertAbout = async (about) => {
    const { Title, Description, ImageURL, ContactInformation, MissionVision } =
        about;
    let sql = `INSERT INTO AboutUs 
        (Title, Description, ImageURL, ContactInformation, MissionVision)
        VALUES
        (?, ?, ?, ?, ?);
        `;
    const result = await query(sql, [
        Title,
        Description,
        ImageURL,
        ContactInformation,
        MissionVision,
    ]);
    return result.insertId; // Returning the inserted AboutUs entry's ID
    };

    const updateAbout = async (aboutId, updatedAbout) => {
    const { Title, Description, ImageURL, ContactInformation, MissionVision } =
        updatedAbout;
    let sql = `UPDATE AboutUs 
        SET 
        Title = ?,
        Description = ?,
        ImageURL = ?,
        ContactInformation = ?,
        MissionVision = ?
        WHERE AboutID = ?;
        `;
    const result = await query(sql, [
        Title,
        Description,
        ImageURL,
        ContactInformation,
        MissionVision,
        aboutId,
    ]);
    return result.affectedRows > 0; // Returning true if the update was successful
    };

    const deleteAbout = async (aboutId) => {
    const sql = "DELETE FROM AboutUs WHERE AboutID = ?";
    await query(sql, [aboutId]);
    };

    module.exports = {
    getAboutUs,
    getAbout,
    insertAbout,
    updateAbout,
    deleteAbout,
    };
