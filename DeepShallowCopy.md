| Deep Copy | Shallow copy |
| ----------- | ----------- |
| A deep copy of an object is a copy whose properties do not share the same references (point to the same underlying values) as those of the source object from which the copy was made | A shallow copy of an object is a copy whose properties share the same references (point to the same underlying values) as those of the source object from which the copy was made.|
| when you change either the source or the copy, you can be assured you're not causing the other object to change too.| when you change either the source or the copy, you may also cause the other object to change too. |
| to make a deep copy of a JavaScript object, use JSON.stringify() to convert the object to a JSON string, and then JSON.parse() to convert the string back into a (completely new) JavaScript object | all object-copy operations (spread syntax,.concat(),.slice(),.from(),.assign(),.create()) create shallow copies.|

**Problem** ***with creating deep copy***
Can be solved using `structuredClone() global function`  


**Problem** ***with shallow copy***
*nested objects* 

