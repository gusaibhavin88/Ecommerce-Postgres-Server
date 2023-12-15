module.exports = {
  AUTH_TOKEN_EXPIRE_TIME: "14d",
  REFRESH_TOKEN_EXPIRE_TIME: "14d",
  JWT_EXPIRED_MESSAGE: "jwt expired",

  URL_EXPIRE_TIME: "2h",
  APP_LANGUAGE: ["en"],
  AWS_FOLDER: {
    COURSE_CATEGORY_IMAGE: "course_category_image",
    COURSE_IMAGE: "course_image",
    LESSON_ATTACHMENT: "lesson_attachment",
    LESSON_IMAGE: "lesson_image",
    CATEGORY_IMAGE: "category_image",
    CATEGORY_EXCEL_FILE: "category_excel_file",
  },
  STATUS: {
    ACTIVE: 1,
    IN_ACTIVE: 2,
  },
  COURSE_STATUS: {
    ACTIVE: 1,
    PRIVATE: 2,
    UPCOMING: 3,
  },

  COURSE_LEVEL: {
    BIGINNER: 1,
    INTERMEDIATE: 2,
    ADVANCE: 3,
  },

  COURSE_ACTION: {
    ACTIVATE: 1,
    DEACTIVATE: 2,
  },

  COURSE_VISIBILITY: {
    HIDE: 1,
    SHOW: 2,
  },

  ORGANIZATION_BRANCH_STATUS: {
    ACTIVE: 1,
    DEACTIVE: 2,
    PENDING: 3,
  },

  PAGINATION: {
    DEFAULT_PAGE: 1,
    DEFAULT_PAGESIZE: 10,
    DEFAULT_SORTBY: "id",
    DEFAULT_SORTORDER: "ASC",
  },
  STATUS_CODE: {
    SUCCESS: 1,
    FAIL: 0,
    VALIDATION: 2,
    UNAUTHENTICATED: -1,
    NOT_FOUND: -2,
    SEE_OTHER: -3,
  },

  ROLES_SLUG: {
    SUPER_ADMIN: "super_admin",
    ORG_ADMIN: "org_admin",
    ORG_BRANCH_ADMIN: "org_branch_admin",
    TEACHER: "teacher",
    STUDENT: "student",
    PARENT: "parents",
    BACK_OFFICE: "back_office",
  },

  WEB_STATUS_CODE: {
    OK: 200,
    CREATED: 201,
    NO_DATA: 203, //temporary
    NO_CONTENT: 204,
    SEE_OTHER: 303,
    BAD_REQUEST: 400,
    UNAUTHORIZED: 401,
    NOT_FOUND: 404,
    SERVER_ERROR: 500,
    FORBIDDEN: 403,
  },

  lesson_type: { video: 1, text: 2, doc: 3, image: 4, PDF: 5 },

  course_overview: { video: 1, text: 2, doc: 3, image: 4, PDF: 5 },

  // LESSON_TYPE: {
  //   VID: 200,
  //   CREATED: 201,
  //   NO_DATA: 203, //temporary
  //   NO_CONTENT: 204,
  //   SEE_OTHER: 303,
  //   BAD_REQUEST: 400,
  //   UNAUTHORIZED: 401,
  //   NOT_FOUND: 404,
  //   SERVER_ERROR: 500,
  //   FORBIDDEN: 403,
  // },

  // DataTypes.ENUM("Video", "Text", "Doc", "Image", "PDF")

  ROOM_TYPES: {
    LECTURE_HALL: "lecture hall",
    LABORATORY: "laboratory",
  },
  ATTENDANCE_STATUS: {
    PRESENT: 1,
    ABSENT: 2,
    HALF_LEAVE: 3,
    EARLY_LEAVE: 4,
  },
};
