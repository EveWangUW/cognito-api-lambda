"use strict";
// Pretty basic Hello World lambda...
Object.defineProperty(exports, "__esModule", { value: true });
exports.handler = void 0;
const handler = async (event = {}) => {
    console.log(event);
    return { statusCode: 201, body: 'Hello world!' };
};
exports.handler = handler;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVsbG93b3JsZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImhlbGxvd29ybGQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLHFDQUFxQzs7O0FBRTlCLE1BQU0sT0FBTyxHQUFHLEtBQUssRUFBRSxRQUFhLEVBQUUsRUFBa0IsRUFBRTtJQUMvRCxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBRW5CLE9BQU8sRUFBRSxVQUFVLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxjQUFjLEVBQUUsQ0FBQztBQUNuRCxDQUFDLENBQUM7QUFKVyxRQUFBLE9BQU8sV0FJbEIiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBQcmV0dHkgYmFzaWMgSGVsbG8gV29ybGQgbGFtYmRhLi4uXG5cbmV4cG9ydCBjb25zdCBoYW5kbGVyID0gYXN5bmMgKGV2ZW50OiBhbnkgPSB7fSkgOiBQcm9taXNlIDxhbnk+ID0+IHtcbiAgY29uc29sZS5sb2coZXZlbnQpO1xuXG4gIHJldHVybiB7IHN0YXR1c0NvZGU6IDIwMSwgYm9keTogJ0hlbGxvIHdvcmxkIScgfTtcbn07XG4iXX0=