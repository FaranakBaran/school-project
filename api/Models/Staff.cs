using System.ComponentModel.DataAnnotations;
using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace api.Models;

public record Staff(
    [property: BsonId, BsonRepresentation(BsonType.ObjectId)] string? Id, //hamishe sabet
    [MinLength(10), MaxLength(10), RegularExpression("[0-9]")] string NationalCode,
    [MinLength(3), MaxLength(30)] string FirstName,
    [MinLength(3), MaxLength(30)] string LastName,
    [Range(18, 99)] int Age,
    [MinLength(3), MaxLength(10)] string PersonnelCode,
    [MinLength(8), MaxLength(8)] string PassWord,
    string Education,
    string JobTitle
);
