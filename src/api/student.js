import ajax from "@/utils/ajax";
///student/fuzzy/:name

export function FetchStudentByFuzzyName(query) {
    return ajax({
        url: "/student/fuzzy/" + query,
        method: "get"
    });
}