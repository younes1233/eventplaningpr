const { query } = require("../database/db");
const moment = require("moment");

const getReviews = async () => {
  let sql = `SELECT * FROM Reviews`;
  const reviews = await query(sql);
  return reviews;
};

const getReview = (reviewId) => {
  let sql = `SELECT * FROM Reviews WHERE ReviewID = ?`;
  const review = query(sql, [reviewId]);
  return review;
};

const getReviewsByUserId = async (userId) => {
  let sql = `SELECT * FROM Reviews WHERE UserID = ?`;
  const reviews = await query(sql, [userId]);
  return reviews;
};

const getReviewsByServiceId = async (serviceId) => {
  let sql = `SELECT * FROM Reviews WHERE ServiceID = ?`;
  const reviews = await query(sql, [serviceId]);
  return reviews;
};

const insertReview = async (review) => {
  const { UserID, ServiceID, Rating, ReviewText, DateAdded } = review;
  let sql = `INSERT INTO Reviews 
    (UserID, ServiceID, Rating, ReviewText, DateAdded)
    VALUES
    (?, ?, ?, ?, ?);
    `;
  const result = await query(sql, [
    UserID,
    ServiceID,
    Rating,
    ReviewText,
    DateAdded,
  ]);
  return result.insertId; // Returning the inserted review's ID
};

const updateReview = async (reviewId, updatedReview) => {
  const { UserID, ServiceID, Rating, ReviewText, DateAdded } = updatedReview;
  let sql = `UPDATE Reviews 
    SET 
      UserID = ?,
      ServiceID = ?,
      Rating = ?,
      ReviewText = ?,
      DateAdded = ?
    WHERE ReviewID = ?;
    `;
  const result = await query(sql, [
    UserID,
    ServiceID,
    Rating,
    ReviewText,
    DateAdded,
    reviewId,
  ]);
  return result.affectedRows > 0; // Returning true if the update was successful
};

const deleteReview = async (reviewId) => {
  const sql = "DELETE FROM Reviews WHERE ReviewID = ?";
  await query(sql, [reviewId]);
};

module.exports = {
  getReviews,
  getReview,
  getReviewsByUserId,
  getReviewsByServiceId,
  insertReview,
  updateReview,
  deleteReview,
};
