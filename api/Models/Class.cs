using System.ComponentModel.DataAnnotations;
using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace api.Models;

public record Class(
    [property: BsonId, BsonRepresentation(BsonType.ObjectId)] string? Id, //hamishe sabet
    string SchoolClasses
);