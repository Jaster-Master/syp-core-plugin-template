/**
 * Core.Backend.Secure
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


export interface Homework { 
    id?: number;
    lessonId?: number;
    teacherId?: number;
    date?: string;
    dueDate?: string;
    text?: string | null;
    remark?: string | null;
    completed?: boolean;
    attachments?: Array<string> | null;
}
