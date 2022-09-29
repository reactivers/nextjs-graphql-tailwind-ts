import { gql } from "@apollo/client";
import * as Apollo from "@apollo/client";
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  date: any;
  numeric: any;
  timestamptz: any;
  uuid: any;
};

export type SignInput = {
  username: Scalars["String"];
};

export type SignOutput = {
  __typename?: "SignOutput";
  username: Scalars["String"];
};

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
  _eq?: InputMaybe<Scalars["String"]>;
  _gt?: InputMaybe<Scalars["String"]>;
  _gte?: InputMaybe<Scalars["String"]>;
  /** does the column match the given case-insensitive pattern */
  _ilike?: InputMaybe<Scalars["String"]>;
  _in?: InputMaybe<Array<Scalars["String"]>>;
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: InputMaybe<Scalars["String"]>;
  _is_null?: InputMaybe<Scalars["Boolean"]>;
  /** does the column match the given pattern */
  _like?: InputMaybe<Scalars["String"]>;
  _lt?: InputMaybe<Scalars["String"]>;
  _lte?: InputMaybe<Scalars["String"]>;
  _neq?: InputMaybe<Scalars["String"]>;
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: InputMaybe<Scalars["String"]>;
  _nin?: InputMaybe<Array<Scalars["String"]>>;
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: InputMaybe<Scalars["String"]>;
  /** does the column NOT match the given pattern */
  _nlike?: InputMaybe<Scalars["String"]>;
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: InputMaybe<Scalars["String"]>;
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: InputMaybe<Scalars["String"]>;
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: InputMaybe<Scalars["String"]>;
  /** does the column match the given SQL regular expression */
  _similar?: InputMaybe<Scalars["String"]>;
};

/** Actors */
export type Actor = {
  __typename?: "actor";
  created_at: Scalars["timestamptz"];
  firstname: Scalars["String"];
  id: Scalars["uuid"];
  lastname: Scalars["String"];
  /** An array relationship */
  movies: Array<Movie_Cast>;
  /** An aggregate relationship */
  movies_aggregate: Movie_Cast_Aggregate;
  poster?: Maybe<Scalars["String"]>;
  /** An array relationship */
  ratings: Array<Actor_Rating>;
  /** An aggregate relationship */
  ratings_aggregate: Actor_Rating_Aggregate;
  updated_at: Scalars["timestamptz"];
};

/** Actors */
export type ActorMoviesArgs = {
  distinct_on?: InputMaybe<Array<Movie_Cast_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<Movie_Cast_Order_By>>;
  where?: InputMaybe<Movie_Cast_Bool_Exp>;
};

/** Actors */
export type ActorMovies_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Movie_Cast_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<Movie_Cast_Order_By>>;
  where?: InputMaybe<Movie_Cast_Bool_Exp>;
};

/** Actors */
export type ActorRatingsArgs = {
  distinct_on?: InputMaybe<Array<Actor_Rating_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<Actor_Rating_Order_By>>;
  where?: InputMaybe<Actor_Rating_Bool_Exp>;
};

/** Actors */
export type ActorRatings_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Actor_Rating_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<Actor_Rating_Order_By>>;
  where?: InputMaybe<Actor_Rating_Bool_Exp>;
};

/** aggregated selection of "actor" */
export type Actor_Aggregate = {
  __typename?: "actor_aggregate";
  aggregate?: Maybe<Actor_Aggregate_Fields>;
  nodes: Array<Actor>;
};

/** aggregate fields of "actor" */
export type Actor_Aggregate_Fields = {
  __typename?: "actor_aggregate_fields";
  count: Scalars["Int"];
  max?: Maybe<Actor_Max_Fields>;
  min?: Maybe<Actor_Min_Fields>;
};

/** aggregate fields of "actor" */
export type Actor_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Actor_Select_Column>>;
  distinct?: InputMaybe<Scalars["Boolean"]>;
};

/** Boolean expression to filter rows from the table "actor". All fields are combined with a logical 'AND'. */
export type Actor_Bool_Exp = {
  _and?: InputMaybe<Array<Actor_Bool_Exp>>;
  _not?: InputMaybe<Actor_Bool_Exp>;
  _or?: InputMaybe<Array<Actor_Bool_Exp>>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  firstname?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  lastname?: InputMaybe<String_Comparison_Exp>;
  movies?: InputMaybe<Movie_Cast_Bool_Exp>;
  poster?: InputMaybe<String_Comparison_Exp>;
  ratings?: InputMaybe<Actor_Rating_Bool_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** aggregate max on columns */
export type Actor_Max_Fields = {
  __typename?: "actor_max_fields";
  created_at?: Maybe<Scalars["timestamptz"]>;
  firstname?: Maybe<Scalars["String"]>;
  id?: Maybe<Scalars["uuid"]>;
  lastname?: Maybe<Scalars["String"]>;
  poster?: Maybe<Scalars["String"]>;
  updated_at?: Maybe<Scalars["timestamptz"]>;
};

/** aggregate min on columns */
export type Actor_Min_Fields = {
  __typename?: "actor_min_fields";
  created_at?: Maybe<Scalars["timestamptz"]>;
  firstname?: Maybe<Scalars["String"]>;
  id?: Maybe<Scalars["uuid"]>;
  lastname?: Maybe<Scalars["String"]>;
  poster?: Maybe<Scalars["String"]>;
  updated_at?: Maybe<Scalars["timestamptz"]>;
};

/** Ordering options when selecting data from "actor". */
export type Actor_Order_By = {
  created_at?: InputMaybe<Order_By>;
  firstname?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  lastname?: InputMaybe<Order_By>;
  movies_aggregate?: InputMaybe<Movie_Cast_Aggregate_Order_By>;
  poster?: InputMaybe<Order_By>;
  ratings_aggregate?: InputMaybe<Actor_Rating_Aggregate_Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** Ratings of the actors */
export type Actor_Rating = {
  __typename?: "actor_rating";
  /** An object relationship */
  actor?: Maybe<Actor>;
  actor_id: Scalars["uuid"];
  created_at: Scalars["timestamptz"];
  id: Scalars["uuid"];
  rate: Scalars["numeric"];
  updated_at: Scalars["timestamptz"];
  /** An object relationship */
  user?: Maybe<User>;
  user_id: Scalars["uuid"];
};

/** aggregated selection of "actor_rating" */
export type Actor_Rating_Aggregate = {
  __typename?: "actor_rating_aggregate";
  aggregate?: Maybe<Actor_Rating_Aggregate_Fields>;
  nodes: Array<Actor_Rating>;
};

/** aggregate fields of "actor_rating" */
export type Actor_Rating_Aggregate_Fields = {
  __typename?: "actor_rating_aggregate_fields";
  avg?: Maybe<Actor_Rating_Avg_Fields>;
  count: Scalars["Int"];
  max?: Maybe<Actor_Rating_Max_Fields>;
  min?: Maybe<Actor_Rating_Min_Fields>;
  stddev?: Maybe<Actor_Rating_Stddev_Fields>;
  stddev_pop?: Maybe<Actor_Rating_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Actor_Rating_Stddev_Samp_Fields>;
  sum?: Maybe<Actor_Rating_Sum_Fields>;
  var_pop?: Maybe<Actor_Rating_Var_Pop_Fields>;
  var_samp?: Maybe<Actor_Rating_Var_Samp_Fields>;
  variance?: Maybe<Actor_Rating_Variance_Fields>;
};

/** aggregate fields of "actor_rating" */
export type Actor_Rating_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Actor_Rating_Select_Column>>;
  distinct?: InputMaybe<Scalars["Boolean"]>;
};

/** order by aggregate values of table "actor_rating" */
export type Actor_Rating_Aggregate_Order_By = {
  avg?: InputMaybe<Actor_Rating_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Actor_Rating_Max_Order_By>;
  min?: InputMaybe<Actor_Rating_Min_Order_By>;
  stddev?: InputMaybe<Actor_Rating_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Actor_Rating_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Actor_Rating_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Actor_Rating_Sum_Order_By>;
  var_pop?: InputMaybe<Actor_Rating_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Actor_Rating_Var_Samp_Order_By>;
  variance?: InputMaybe<Actor_Rating_Variance_Order_By>;
};

/** aggregate avg on columns */
export type Actor_Rating_Avg_Fields = {
  __typename?: "actor_rating_avg_fields";
  rate?: Maybe<Scalars["Float"]>;
};

/** order by avg() on columns of table "actor_rating" */
export type Actor_Rating_Avg_Order_By = {
  rate?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "actor_rating". All fields are combined with a logical 'AND'. */
export type Actor_Rating_Bool_Exp = {
  _and?: InputMaybe<Array<Actor_Rating_Bool_Exp>>;
  _not?: InputMaybe<Actor_Rating_Bool_Exp>;
  _or?: InputMaybe<Array<Actor_Rating_Bool_Exp>>;
  actor?: InputMaybe<Actor_Bool_Exp>;
  actor_id?: InputMaybe<Uuid_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  rate?: InputMaybe<Numeric_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  user?: InputMaybe<User_Bool_Exp>;
  user_id?: InputMaybe<Uuid_Comparison_Exp>;
};

/** aggregate max on columns */
export type Actor_Rating_Max_Fields = {
  __typename?: "actor_rating_max_fields";
  actor_id?: Maybe<Scalars["uuid"]>;
  created_at?: Maybe<Scalars["timestamptz"]>;
  id?: Maybe<Scalars["uuid"]>;
  rate?: Maybe<Scalars["numeric"]>;
  updated_at?: Maybe<Scalars["timestamptz"]>;
  user_id?: Maybe<Scalars["uuid"]>;
};

/** order by max() on columns of table "actor_rating" */
export type Actor_Rating_Max_Order_By = {
  actor_id?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  rate?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Actor_Rating_Min_Fields = {
  __typename?: "actor_rating_min_fields";
  actor_id?: Maybe<Scalars["uuid"]>;
  created_at?: Maybe<Scalars["timestamptz"]>;
  id?: Maybe<Scalars["uuid"]>;
  rate?: Maybe<Scalars["numeric"]>;
  updated_at?: Maybe<Scalars["timestamptz"]>;
  user_id?: Maybe<Scalars["uuid"]>;
};

/** order by min() on columns of table "actor_rating" */
export type Actor_Rating_Min_Order_By = {
  actor_id?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  rate?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** Ordering options when selecting data from "actor_rating". */
export type Actor_Rating_Order_By = {
  actor?: InputMaybe<Actor_Order_By>;
  actor_id?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  rate?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user?: InputMaybe<User_Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** select columns of table "actor_rating" */
export enum Actor_Rating_Select_Column {
  /** column name */
  ActorId = "actor_id",
  /** column name */
  CreatedAt = "created_at",
  /** column name */
  Id = "id",
  /** column name */
  Rate = "rate",
  /** column name */
  UpdatedAt = "updated_at",
  /** column name */
  UserId = "user_id",
}

/** aggregate stddev on columns */
export type Actor_Rating_Stddev_Fields = {
  __typename?: "actor_rating_stddev_fields";
  rate?: Maybe<Scalars["Float"]>;
};

/** order by stddev() on columns of table "actor_rating" */
export type Actor_Rating_Stddev_Order_By = {
  rate?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Actor_Rating_Stddev_Pop_Fields = {
  __typename?: "actor_rating_stddev_pop_fields";
  rate?: Maybe<Scalars["Float"]>;
};

/** order by stddev_pop() on columns of table "actor_rating" */
export type Actor_Rating_Stddev_Pop_Order_By = {
  rate?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Actor_Rating_Stddev_Samp_Fields = {
  __typename?: "actor_rating_stddev_samp_fields";
  rate?: Maybe<Scalars["Float"]>;
};

/** order by stddev_samp() on columns of table "actor_rating" */
export type Actor_Rating_Stddev_Samp_Order_By = {
  rate?: InputMaybe<Order_By>;
};

/** aggregate sum on columns */
export type Actor_Rating_Sum_Fields = {
  __typename?: "actor_rating_sum_fields";
  rate?: Maybe<Scalars["numeric"]>;
};

/** order by sum() on columns of table "actor_rating" */
export type Actor_Rating_Sum_Order_By = {
  rate?: InputMaybe<Order_By>;
};

/** aggregate var_pop on columns */
export type Actor_Rating_Var_Pop_Fields = {
  __typename?: "actor_rating_var_pop_fields";
  rate?: Maybe<Scalars["Float"]>;
};

/** order by var_pop() on columns of table "actor_rating" */
export type Actor_Rating_Var_Pop_Order_By = {
  rate?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Actor_Rating_Var_Samp_Fields = {
  __typename?: "actor_rating_var_samp_fields";
  rate?: Maybe<Scalars["Float"]>;
};

/** order by var_samp() on columns of table "actor_rating" */
export type Actor_Rating_Var_Samp_Order_By = {
  rate?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Actor_Rating_Variance_Fields = {
  __typename?: "actor_rating_variance_fields";
  rate?: Maybe<Scalars["Float"]>;
};

/** order by variance() on columns of table "actor_rating" */
export type Actor_Rating_Variance_Order_By = {
  rate?: InputMaybe<Order_By>;
};

/** select columns of table "actor" */
export enum Actor_Select_Column {
  /** column name */
  CreatedAt = "created_at",
  /** column name */
  Firstname = "firstname",
  /** column name */
  Id = "id",
  /** column name */
  Lastname = "lastname",
  /** column name */
  Poster = "poster",
  /** column name */
  UpdatedAt = "updated_at",
}

export type Date_Cast_Exp = {
  String?: InputMaybe<String_Comparison_Exp>;
};

/** Boolean expression to compare columns of type "date". All fields are combined with logical 'AND'. */
export type Date_Comparison_Exp = {
  _cast?: InputMaybe<Date_Cast_Exp>;
  _eq?: InputMaybe<Scalars["date"]>;
  _gt?: InputMaybe<Scalars["date"]>;
  _gte?: InputMaybe<Scalars["date"]>;
  _in?: InputMaybe<Array<Scalars["date"]>>;
  _is_null?: InputMaybe<Scalars["Boolean"]>;
  _lt?: InputMaybe<Scalars["date"]>;
  _lte?: InputMaybe<Scalars["date"]>;
  _neq?: InputMaybe<Scalars["date"]>;
  _nin?: InputMaybe<Array<Scalars["date"]>>;
};

/** Directors */
export type Director = {
  __typename?: "director";
  created_at: Scalars["timestamptz"];
  firstname: Scalars["String"];
  id: Scalars["uuid"];
  lastname: Scalars["String"];
  /** An array relationship */
  movies: Array<Movie>;
  /** An aggregate relationship */
  movies_aggregate: Movie_Aggregate;
  /** An array relationship */
  ratings: Array<Director_Rating>;
  /** An aggregate relationship */
  ratings_aggregate: Director_Rating_Aggregate;
  updated_at: Scalars["timestamptz"];
  /** An array relationship */
  user_prefs: Array<User_Director_Pref>;
  /** An aggregate relationship */
  user_prefs_aggregate: User_Director_Pref_Aggregate;
};

/** Directors */
export type DirectorMoviesArgs = {
  distinct_on?: InputMaybe<Array<Movie_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<Movie_Order_By>>;
  where?: InputMaybe<Movie_Bool_Exp>;
};

/** Directors */
export type DirectorMovies_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Movie_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<Movie_Order_By>>;
  where?: InputMaybe<Movie_Bool_Exp>;
};

/** Directors */
export type DirectorRatingsArgs = {
  distinct_on?: InputMaybe<Array<Director_Rating_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<Director_Rating_Order_By>>;
  where?: InputMaybe<Director_Rating_Bool_Exp>;
};

/** Directors */
export type DirectorRatings_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Director_Rating_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<Director_Rating_Order_By>>;
  where?: InputMaybe<Director_Rating_Bool_Exp>;
};

/** Directors */
export type DirectorUser_PrefsArgs = {
  distinct_on?: InputMaybe<Array<User_Director_Pref_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<User_Director_Pref_Order_By>>;
  where?: InputMaybe<User_Director_Pref_Bool_Exp>;
};

/** Directors */
export type DirectorUser_Prefs_AggregateArgs = {
  distinct_on?: InputMaybe<Array<User_Director_Pref_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<User_Director_Pref_Order_By>>;
  where?: InputMaybe<User_Director_Pref_Bool_Exp>;
};

/** aggregated selection of "director" */
export type Director_Aggregate = {
  __typename?: "director_aggregate";
  aggregate?: Maybe<Director_Aggregate_Fields>;
  nodes: Array<Director>;
};

/** aggregate fields of "director" */
export type Director_Aggregate_Fields = {
  __typename?: "director_aggregate_fields";
  count: Scalars["Int"];
  max?: Maybe<Director_Max_Fields>;
  min?: Maybe<Director_Min_Fields>;
};

/** aggregate fields of "director" */
export type Director_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Director_Select_Column>>;
  distinct?: InputMaybe<Scalars["Boolean"]>;
};

/** Boolean expression to filter rows from the table "director". All fields are combined with a logical 'AND'. */
export type Director_Bool_Exp = {
  _and?: InputMaybe<Array<Director_Bool_Exp>>;
  _not?: InputMaybe<Director_Bool_Exp>;
  _or?: InputMaybe<Array<Director_Bool_Exp>>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  firstname?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  lastname?: InputMaybe<String_Comparison_Exp>;
  movies?: InputMaybe<Movie_Bool_Exp>;
  ratings?: InputMaybe<Director_Rating_Bool_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  user_prefs?: InputMaybe<User_Director_Pref_Bool_Exp>;
};

/** aggregate max on columns */
export type Director_Max_Fields = {
  __typename?: "director_max_fields";
  created_at?: Maybe<Scalars["timestamptz"]>;
  firstname?: Maybe<Scalars["String"]>;
  id?: Maybe<Scalars["uuid"]>;
  lastname?: Maybe<Scalars["String"]>;
  updated_at?: Maybe<Scalars["timestamptz"]>;
};

/** aggregate min on columns */
export type Director_Min_Fields = {
  __typename?: "director_min_fields";
  created_at?: Maybe<Scalars["timestamptz"]>;
  firstname?: Maybe<Scalars["String"]>;
  id?: Maybe<Scalars["uuid"]>;
  lastname?: Maybe<Scalars["String"]>;
  updated_at?: Maybe<Scalars["timestamptz"]>;
};

/** Ordering options when selecting data from "director". */
export type Director_Order_By = {
  created_at?: InputMaybe<Order_By>;
  firstname?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  lastname?: InputMaybe<Order_By>;
  movies_aggregate?: InputMaybe<Movie_Aggregate_Order_By>;
  ratings_aggregate?: InputMaybe<Director_Rating_Aggregate_Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user_prefs_aggregate?: InputMaybe<User_Director_Pref_Aggregate_Order_By>;
};

/** Ratings of the directors */
export type Director_Rating = {
  __typename?: "director_rating";
  created_at: Scalars["timestamptz"];
  /** An object relationship */
  director?: Maybe<Director>;
  director_id: Scalars["uuid"];
  id: Scalars["uuid"];
  rate: Scalars["numeric"];
  updated_at: Scalars["timestamptz"];
  /** An object relationship */
  user?: Maybe<User>;
  user_id: Scalars["uuid"];
};

/** aggregated selection of "director_rating" */
export type Director_Rating_Aggregate = {
  __typename?: "director_rating_aggregate";
  aggregate?: Maybe<Director_Rating_Aggregate_Fields>;
  nodes: Array<Director_Rating>;
};

/** aggregate fields of "director_rating" */
export type Director_Rating_Aggregate_Fields = {
  __typename?: "director_rating_aggregate_fields";
  avg?: Maybe<Director_Rating_Avg_Fields>;
  count: Scalars["Int"];
  max?: Maybe<Director_Rating_Max_Fields>;
  min?: Maybe<Director_Rating_Min_Fields>;
  stddev?: Maybe<Director_Rating_Stddev_Fields>;
  stddev_pop?: Maybe<Director_Rating_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Director_Rating_Stddev_Samp_Fields>;
  sum?: Maybe<Director_Rating_Sum_Fields>;
  var_pop?: Maybe<Director_Rating_Var_Pop_Fields>;
  var_samp?: Maybe<Director_Rating_Var_Samp_Fields>;
  variance?: Maybe<Director_Rating_Variance_Fields>;
};

/** aggregate fields of "director_rating" */
export type Director_Rating_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Director_Rating_Select_Column>>;
  distinct?: InputMaybe<Scalars["Boolean"]>;
};

/** order by aggregate values of table "director_rating" */
export type Director_Rating_Aggregate_Order_By = {
  avg?: InputMaybe<Director_Rating_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Director_Rating_Max_Order_By>;
  min?: InputMaybe<Director_Rating_Min_Order_By>;
  stddev?: InputMaybe<Director_Rating_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Director_Rating_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Director_Rating_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Director_Rating_Sum_Order_By>;
  var_pop?: InputMaybe<Director_Rating_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Director_Rating_Var_Samp_Order_By>;
  variance?: InputMaybe<Director_Rating_Variance_Order_By>;
};

/** aggregate avg on columns */
export type Director_Rating_Avg_Fields = {
  __typename?: "director_rating_avg_fields";
  rate?: Maybe<Scalars["Float"]>;
};

/** order by avg() on columns of table "director_rating" */
export type Director_Rating_Avg_Order_By = {
  rate?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "director_rating". All fields are combined with a logical 'AND'. */
export type Director_Rating_Bool_Exp = {
  _and?: InputMaybe<Array<Director_Rating_Bool_Exp>>;
  _not?: InputMaybe<Director_Rating_Bool_Exp>;
  _or?: InputMaybe<Array<Director_Rating_Bool_Exp>>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  director?: InputMaybe<Director_Bool_Exp>;
  director_id?: InputMaybe<Uuid_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  rate?: InputMaybe<Numeric_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  user?: InputMaybe<User_Bool_Exp>;
  user_id?: InputMaybe<Uuid_Comparison_Exp>;
};

/** aggregate max on columns */
export type Director_Rating_Max_Fields = {
  __typename?: "director_rating_max_fields";
  created_at?: Maybe<Scalars["timestamptz"]>;
  director_id?: Maybe<Scalars["uuid"]>;
  id?: Maybe<Scalars["uuid"]>;
  rate?: Maybe<Scalars["numeric"]>;
  updated_at?: Maybe<Scalars["timestamptz"]>;
  user_id?: Maybe<Scalars["uuid"]>;
};

/** order by max() on columns of table "director_rating" */
export type Director_Rating_Max_Order_By = {
  created_at?: InputMaybe<Order_By>;
  director_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  rate?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Director_Rating_Min_Fields = {
  __typename?: "director_rating_min_fields";
  created_at?: Maybe<Scalars["timestamptz"]>;
  director_id?: Maybe<Scalars["uuid"]>;
  id?: Maybe<Scalars["uuid"]>;
  rate?: Maybe<Scalars["numeric"]>;
  updated_at?: Maybe<Scalars["timestamptz"]>;
  user_id?: Maybe<Scalars["uuid"]>;
};

/** order by min() on columns of table "director_rating" */
export type Director_Rating_Min_Order_By = {
  created_at?: InputMaybe<Order_By>;
  director_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  rate?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** Ordering options when selecting data from "director_rating". */
export type Director_Rating_Order_By = {
  created_at?: InputMaybe<Order_By>;
  director?: InputMaybe<Director_Order_By>;
  director_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  rate?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user?: InputMaybe<User_Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** select columns of table "director_rating" */
export enum Director_Rating_Select_Column {
  /** column name */
  CreatedAt = "created_at",
  /** column name */
  DirectorId = "director_id",
  /** column name */
  Id = "id",
  /** column name */
  Rate = "rate",
  /** column name */
  UpdatedAt = "updated_at",
  /** column name */
  UserId = "user_id",
}

/** aggregate stddev on columns */
export type Director_Rating_Stddev_Fields = {
  __typename?: "director_rating_stddev_fields";
  rate?: Maybe<Scalars["Float"]>;
};

/** order by stddev() on columns of table "director_rating" */
export type Director_Rating_Stddev_Order_By = {
  rate?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Director_Rating_Stddev_Pop_Fields = {
  __typename?: "director_rating_stddev_pop_fields";
  rate?: Maybe<Scalars["Float"]>;
};

/** order by stddev_pop() on columns of table "director_rating" */
export type Director_Rating_Stddev_Pop_Order_By = {
  rate?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Director_Rating_Stddev_Samp_Fields = {
  __typename?: "director_rating_stddev_samp_fields";
  rate?: Maybe<Scalars["Float"]>;
};

/** order by stddev_samp() on columns of table "director_rating" */
export type Director_Rating_Stddev_Samp_Order_By = {
  rate?: InputMaybe<Order_By>;
};

/** aggregate sum on columns */
export type Director_Rating_Sum_Fields = {
  __typename?: "director_rating_sum_fields";
  rate?: Maybe<Scalars["numeric"]>;
};

/** order by sum() on columns of table "director_rating" */
export type Director_Rating_Sum_Order_By = {
  rate?: InputMaybe<Order_By>;
};

/** aggregate var_pop on columns */
export type Director_Rating_Var_Pop_Fields = {
  __typename?: "director_rating_var_pop_fields";
  rate?: Maybe<Scalars["Float"]>;
};

/** order by var_pop() on columns of table "director_rating" */
export type Director_Rating_Var_Pop_Order_By = {
  rate?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Director_Rating_Var_Samp_Fields = {
  __typename?: "director_rating_var_samp_fields";
  rate?: Maybe<Scalars["Float"]>;
};

/** order by var_samp() on columns of table "director_rating" */
export type Director_Rating_Var_Samp_Order_By = {
  rate?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Director_Rating_Variance_Fields = {
  __typename?: "director_rating_variance_fields";
  rate?: Maybe<Scalars["Float"]>;
};

/** order by variance() on columns of table "director_rating" */
export type Director_Rating_Variance_Order_By = {
  rate?: InputMaybe<Order_By>;
};

/** select columns of table "director" */
export enum Director_Select_Column {
  /** column name */
  CreatedAt = "created_at",
  /** column name */
  Firstname = "firstname",
  /** column name */
  Id = "id",
  /** column name */
  Lastname = "lastname",
  /** column name */
  UpdatedAt = "updated_at",
}

/** Genres */
export type Genre = {
  __typename?: "genre";
  created_at: Scalars["timestamptz"];
  id: Scalars["uuid"];
  /** An array relationship */
  movie_genres: Array<Movie_Genre>;
  /** An aggregate relationship */
  movie_genres_aggregate: Movie_Genre_Aggregate;
  title: Scalars["String"];
  updated_at: Scalars["timestamptz"];
  /** An array relationship */
  user_prefs: Array<User_Genre_Pref>;
  /** An aggregate relationship */
  user_prefs_aggregate: User_Genre_Pref_Aggregate;
};

/** Genres */
export type GenreMovie_GenresArgs = {
  distinct_on?: InputMaybe<Array<Movie_Genre_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<Movie_Genre_Order_By>>;
  where?: InputMaybe<Movie_Genre_Bool_Exp>;
};

/** Genres */
export type GenreMovie_Genres_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Movie_Genre_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<Movie_Genre_Order_By>>;
  where?: InputMaybe<Movie_Genre_Bool_Exp>;
};

/** Genres */
export type GenreUser_PrefsArgs = {
  distinct_on?: InputMaybe<Array<User_Genre_Pref_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<User_Genre_Pref_Order_By>>;
  where?: InputMaybe<User_Genre_Pref_Bool_Exp>;
};

/** Genres */
export type GenreUser_Prefs_AggregateArgs = {
  distinct_on?: InputMaybe<Array<User_Genre_Pref_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<User_Genre_Pref_Order_By>>;
  where?: InputMaybe<User_Genre_Pref_Bool_Exp>;
};

/** aggregated selection of "genre" */
export type Genre_Aggregate = {
  __typename?: "genre_aggregate";
  aggregate?: Maybe<Genre_Aggregate_Fields>;
  nodes: Array<Genre>;
};

/** aggregate fields of "genre" */
export type Genre_Aggregate_Fields = {
  __typename?: "genre_aggregate_fields";
  count: Scalars["Int"];
  max?: Maybe<Genre_Max_Fields>;
  min?: Maybe<Genre_Min_Fields>;
};

/** aggregate fields of "genre" */
export type Genre_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Genre_Select_Column>>;
  distinct?: InputMaybe<Scalars["Boolean"]>;
};

/** Boolean expression to filter rows from the table "genre". All fields are combined with a logical 'AND'. */
export type Genre_Bool_Exp = {
  _and?: InputMaybe<Array<Genre_Bool_Exp>>;
  _not?: InputMaybe<Genre_Bool_Exp>;
  _or?: InputMaybe<Array<Genre_Bool_Exp>>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  movie_genres?: InputMaybe<Movie_Genre_Bool_Exp>;
  title?: InputMaybe<String_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  user_prefs?: InputMaybe<User_Genre_Pref_Bool_Exp>;
};

/** aggregate max on columns */
export type Genre_Max_Fields = {
  __typename?: "genre_max_fields";
  created_at?: Maybe<Scalars["timestamptz"]>;
  id?: Maybe<Scalars["uuid"]>;
  title?: Maybe<Scalars["String"]>;
  updated_at?: Maybe<Scalars["timestamptz"]>;
};

/** aggregate min on columns */
export type Genre_Min_Fields = {
  __typename?: "genre_min_fields";
  created_at?: Maybe<Scalars["timestamptz"]>;
  id?: Maybe<Scalars["uuid"]>;
  title?: Maybe<Scalars["String"]>;
  updated_at?: Maybe<Scalars["timestamptz"]>;
};

/** Ordering options when selecting data from "genre". */
export type Genre_Order_By = {
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  movie_genres_aggregate?: InputMaybe<Movie_Genre_Aggregate_Order_By>;
  title?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user_prefs_aggregate?: InputMaybe<User_Genre_Pref_Aggregate_Order_By>;
};

/** select columns of table "genre" */
export enum Genre_Select_Column {
  /** column name */
  CreatedAt = "created_at",
  /** column name */
  Id = "id",
  /** column name */
  Title = "title",
  /** column name */
  UpdatedAt = "updated_at",
}

/** Movies */
export type Movie = {
  __typename?: "movie";
  /** An array relationship */
  actors: Array<Movie_Cast>;
  /** An aggregate relationship */
  actors_aggregate: Movie_Cast_Aggregate;
  created_at: Scalars["timestamptz"];
  description: Scalars["String"];
  /** An object relationship */
  director?: Maybe<Director>;
  director_id: Scalars["uuid"];
  /** An array relationship */
  genres: Array<Movie_Genre>;
  /** An aggregate relationship */
  genres_aggregate: Movie_Genre_Aggregate;
  id: Scalars["uuid"];
  imdb_rating: Scalars["numeric"];
  imdb_votes: Scalars["numeric"];
  poster?: Maybe<Scalars["String"]>;
  /** An array relationship */
  ratings: Array<Movie_Rating>;
  /** An aggregate relationship */
  ratings_aggregate: Movie_Rating_Aggregate;
  release_date: Scalars["date"];
  release_year: Scalars["numeric"];
  /** An array relationship */
  similar_movies: Array<Similar_Movie>;
  /** An aggregate relationship */
  similar_movies_aggregate: Similar_Movie_Aggregate;
  title: Scalars["String"];
  trailer_embed: Scalars["String"];
  updated_at: Scalars["timestamptz"];
  /** An array relationship */
  user_prefs: Array<User_Movie_Pref>;
  /** An aggregate relationship */
  user_prefs_aggregate: User_Movie_Pref_Aggregate;
};

/** Movies */
export type MovieActorsArgs = {
  distinct_on?: InputMaybe<Array<Movie_Cast_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<Movie_Cast_Order_By>>;
  where?: InputMaybe<Movie_Cast_Bool_Exp>;
};

/** Movies */
export type MovieActors_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Movie_Cast_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<Movie_Cast_Order_By>>;
  where?: InputMaybe<Movie_Cast_Bool_Exp>;
};

/** Movies */
export type MovieGenresArgs = {
  distinct_on?: InputMaybe<Array<Movie_Genre_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<Movie_Genre_Order_By>>;
  where?: InputMaybe<Movie_Genre_Bool_Exp>;
};

/** Movies */
export type MovieGenres_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Movie_Genre_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<Movie_Genre_Order_By>>;
  where?: InputMaybe<Movie_Genre_Bool_Exp>;
};

/** Movies */
export type MovieRatingsArgs = {
  distinct_on?: InputMaybe<Array<Movie_Rating_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<Movie_Rating_Order_By>>;
  where?: InputMaybe<Movie_Rating_Bool_Exp>;
};

/** Movies */
export type MovieRatings_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Movie_Rating_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<Movie_Rating_Order_By>>;
  where?: InputMaybe<Movie_Rating_Bool_Exp>;
};

/** Movies */
export type MovieSimilar_MoviesArgs = {
  distinct_on?: InputMaybe<Array<Similar_Movie_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<Similar_Movie_Order_By>>;
  where?: InputMaybe<Similar_Movie_Bool_Exp>;
};

/** Movies */
export type MovieSimilar_Movies_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Similar_Movie_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<Similar_Movie_Order_By>>;
  where?: InputMaybe<Similar_Movie_Bool_Exp>;
};

/** Movies */
export type MovieUser_PrefsArgs = {
  distinct_on?: InputMaybe<Array<User_Movie_Pref_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<User_Movie_Pref_Order_By>>;
  where?: InputMaybe<User_Movie_Pref_Bool_Exp>;
};

/** Movies */
export type MovieUser_Prefs_AggregateArgs = {
  distinct_on?: InputMaybe<Array<User_Movie_Pref_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<User_Movie_Pref_Order_By>>;
  where?: InputMaybe<User_Movie_Pref_Bool_Exp>;
};

/** aggregated selection of "movie" */
export type Movie_Aggregate = {
  __typename?: "movie_aggregate";
  aggregate?: Maybe<Movie_Aggregate_Fields>;
  nodes: Array<Movie>;
};

/** aggregate fields of "movie" */
export type Movie_Aggregate_Fields = {
  __typename?: "movie_aggregate_fields";
  avg?: Maybe<Movie_Avg_Fields>;
  count: Scalars["Int"];
  max?: Maybe<Movie_Max_Fields>;
  min?: Maybe<Movie_Min_Fields>;
  stddev?: Maybe<Movie_Stddev_Fields>;
  stddev_pop?: Maybe<Movie_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Movie_Stddev_Samp_Fields>;
  sum?: Maybe<Movie_Sum_Fields>;
  var_pop?: Maybe<Movie_Var_Pop_Fields>;
  var_samp?: Maybe<Movie_Var_Samp_Fields>;
  variance?: Maybe<Movie_Variance_Fields>;
};

/** aggregate fields of "movie" */
export type Movie_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Movie_Select_Column>>;
  distinct?: InputMaybe<Scalars["Boolean"]>;
};

/** order by aggregate values of table "movie" */
export type Movie_Aggregate_Order_By = {
  avg?: InputMaybe<Movie_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Movie_Max_Order_By>;
  min?: InputMaybe<Movie_Min_Order_By>;
  stddev?: InputMaybe<Movie_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Movie_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Movie_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Movie_Sum_Order_By>;
  var_pop?: InputMaybe<Movie_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Movie_Var_Samp_Order_By>;
  variance?: InputMaybe<Movie_Variance_Order_By>;
};

/** aggregate avg on columns */
export type Movie_Avg_Fields = {
  __typename?: "movie_avg_fields";
  imdb_rating?: Maybe<Scalars["Float"]>;
  imdb_votes?: Maybe<Scalars["Float"]>;
  release_year?: Maybe<Scalars["Float"]>;
};

/** order by avg() on columns of table "movie" */
export type Movie_Avg_Order_By = {
  imdb_rating?: InputMaybe<Order_By>;
  imdb_votes?: InputMaybe<Order_By>;
  release_year?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "movie". All fields are combined with a logical 'AND'. */
export type Movie_Bool_Exp = {
  _and?: InputMaybe<Array<Movie_Bool_Exp>>;
  _not?: InputMaybe<Movie_Bool_Exp>;
  _or?: InputMaybe<Array<Movie_Bool_Exp>>;
  actors?: InputMaybe<Movie_Cast_Bool_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  description?: InputMaybe<String_Comparison_Exp>;
  director?: InputMaybe<Director_Bool_Exp>;
  director_id?: InputMaybe<Uuid_Comparison_Exp>;
  genres?: InputMaybe<Movie_Genre_Bool_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  imdb_rating?: InputMaybe<Numeric_Comparison_Exp>;
  imdb_votes?: InputMaybe<Numeric_Comparison_Exp>;
  poster?: InputMaybe<String_Comparison_Exp>;
  ratings?: InputMaybe<Movie_Rating_Bool_Exp>;
  release_date?: InputMaybe<Date_Comparison_Exp>;
  release_year?: InputMaybe<Numeric_Comparison_Exp>;
  similar_movies?: InputMaybe<Similar_Movie_Bool_Exp>;
  title?: InputMaybe<String_Comparison_Exp>;
  trailer_embed?: InputMaybe<String_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  user_prefs?: InputMaybe<User_Movie_Pref_Bool_Exp>;
};

/** Movie crew */
export type Movie_Cast = {
  __typename?: "movie_cast";
  /** An object relationship */
  actor?: Maybe<Actor>;
  actor_id: Scalars["uuid"];
  created_at: Scalars["timestamptz"];
  id: Scalars["uuid"];
  /** An object relationship */
  movie?: Maybe<Movie>;
  movie_id: Scalars["uuid"];
  updated_at: Scalars["timestamptz"];
};

/** aggregated selection of "movie_cast" */
export type Movie_Cast_Aggregate = {
  __typename?: "movie_cast_aggregate";
  aggregate?: Maybe<Movie_Cast_Aggregate_Fields>;
  nodes: Array<Movie_Cast>;
};

/** aggregate fields of "movie_cast" */
export type Movie_Cast_Aggregate_Fields = {
  __typename?: "movie_cast_aggregate_fields";
  count: Scalars["Int"];
  max?: Maybe<Movie_Cast_Max_Fields>;
  min?: Maybe<Movie_Cast_Min_Fields>;
};

/** aggregate fields of "movie_cast" */
export type Movie_Cast_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Movie_Cast_Select_Column>>;
  distinct?: InputMaybe<Scalars["Boolean"]>;
};

/** order by aggregate values of table "movie_cast" */
export type Movie_Cast_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Movie_Cast_Max_Order_By>;
  min?: InputMaybe<Movie_Cast_Min_Order_By>;
};

/** Boolean expression to filter rows from the table "movie_cast". All fields are combined with a logical 'AND'. */
export type Movie_Cast_Bool_Exp = {
  _and?: InputMaybe<Array<Movie_Cast_Bool_Exp>>;
  _not?: InputMaybe<Movie_Cast_Bool_Exp>;
  _or?: InputMaybe<Array<Movie_Cast_Bool_Exp>>;
  actor?: InputMaybe<Actor_Bool_Exp>;
  actor_id?: InputMaybe<Uuid_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  movie?: InputMaybe<Movie_Bool_Exp>;
  movie_id?: InputMaybe<Uuid_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** aggregate max on columns */
export type Movie_Cast_Max_Fields = {
  __typename?: "movie_cast_max_fields";
  actor_id?: Maybe<Scalars["uuid"]>;
  created_at?: Maybe<Scalars["timestamptz"]>;
  id?: Maybe<Scalars["uuid"]>;
  movie_id?: Maybe<Scalars["uuid"]>;
  updated_at?: Maybe<Scalars["timestamptz"]>;
};

/** order by max() on columns of table "movie_cast" */
export type Movie_Cast_Max_Order_By = {
  actor_id?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  movie_id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Movie_Cast_Min_Fields = {
  __typename?: "movie_cast_min_fields";
  actor_id?: Maybe<Scalars["uuid"]>;
  created_at?: Maybe<Scalars["timestamptz"]>;
  id?: Maybe<Scalars["uuid"]>;
  movie_id?: Maybe<Scalars["uuid"]>;
  updated_at?: Maybe<Scalars["timestamptz"]>;
};

/** order by min() on columns of table "movie_cast" */
export type Movie_Cast_Min_Order_By = {
  actor_id?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  movie_id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** Ordering options when selecting data from "movie_cast". */
export type Movie_Cast_Order_By = {
  actor?: InputMaybe<Actor_Order_By>;
  actor_id?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  movie?: InputMaybe<Movie_Order_By>;
  movie_id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** select columns of table "movie_cast" */
export enum Movie_Cast_Select_Column {
  /** column name */
  ActorId = "actor_id",
  /** column name */
  CreatedAt = "created_at",
  /** column name */
  Id = "id",
  /** column name */
  MovieId = "movie_id",
  /** column name */
  UpdatedAt = "updated_at",
}

/** Genres of the movies */
export type Movie_Genre = {
  __typename?: "movie_genre";
  created_at: Scalars["timestamptz"];
  /** An object relationship */
  genre?: Maybe<Genre>;
  genre_id: Scalars["uuid"];
  id: Scalars["uuid"];
  /** An object relationship */
  movie?: Maybe<Movie>;
  movie_id: Scalars["uuid"];
  updated_at: Scalars["timestamptz"];
};

/** aggregated selection of "movie_genre" */
export type Movie_Genre_Aggregate = {
  __typename?: "movie_genre_aggregate";
  aggregate?: Maybe<Movie_Genre_Aggregate_Fields>;
  nodes: Array<Movie_Genre>;
};

/** aggregate fields of "movie_genre" */
export type Movie_Genre_Aggregate_Fields = {
  __typename?: "movie_genre_aggregate_fields";
  count: Scalars["Int"];
  max?: Maybe<Movie_Genre_Max_Fields>;
  min?: Maybe<Movie_Genre_Min_Fields>;
};

/** aggregate fields of "movie_genre" */
export type Movie_Genre_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Movie_Genre_Select_Column>>;
  distinct?: InputMaybe<Scalars["Boolean"]>;
};

/** order by aggregate values of table "movie_genre" */
export type Movie_Genre_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Movie_Genre_Max_Order_By>;
  min?: InputMaybe<Movie_Genre_Min_Order_By>;
};

/** Boolean expression to filter rows from the table "movie_genre". All fields are combined with a logical 'AND'. */
export type Movie_Genre_Bool_Exp = {
  _and?: InputMaybe<Array<Movie_Genre_Bool_Exp>>;
  _not?: InputMaybe<Movie_Genre_Bool_Exp>;
  _or?: InputMaybe<Array<Movie_Genre_Bool_Exp>>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  genre?: InputMaybe<Genre_Bool_Exp>;
  genre_id?: InputMaybe<Uuid_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  movie?: InputMaybe<Movie_Bool_Exp>;
  movie_id?: InputMaybe<Uuid_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** aggregate max on columns */
export type Movie_Genre_Max_Fields = {
  __typename?: "movie_genre_max_fields";
  created_at?: Maybe<Scalars["timestamptz"]>;
  genre_id?: Maybe<Scalars["uuid"]>;
  id?: Maybe<Scalars["uuid"]>;
  movie_id?: Maybe<Scalars["uuid"]>;
  updated_at?: Maybe<Scalars["timestamptz"]>;
};

/** order by max() on columns of table "movie_genre" */
export type Movie_Genre_Max_Order_By = {
  created_at?: InputMaybe<Order_By>;
  genre_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  movie_id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Movie_Genre_Min_Fields = {
  __typename?: "movie_genre_min_fields";
  created_at?: Maybe<Scalars["timestamptz"]>;
  genre_id?: Maybe<Scalars["uuid"]>;
  id?: Maybe<Scalars["uuid"]>;
  movie_id?: Maybe<Scalars["uuid"]>;
  updated_at?: Maybe<Scalars["timestamptz"]>;
};

/** order by min() on columns of table "movie_genre" */
export type Movie_Genre_Min_Order_By = {
  created_at?: InputMaybe<Order_By>;
  genre_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  movie_id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** Ordering options when selecting data from "movie_genre". */
export type Movie_Genre_Order_By = {
  created_at?: InputMaybe<Order_By>;
  genre?: InputMaybe<Genre_Order_By>;
  genre_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  movie?: InputMaybe<Movie_Order_By>;
  movie_id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** select columns of table "movie_genre" */
export enum Movie_Genre_Select_Column {
  /** column name */
  CreatedAt = "created_at",
  /** column name */
  GenreId = "genre_id",
  /** column name */
  Id = "id",
  /** column name */
  MovieId = "movie_id",
  /** column name */
  UpdatedAt = "updated_at",
}

/** aggregate max on columns */
export type Movie_Max_Fields = {
  __typename?: "movie_max_fields";
  created_at?: Maybe<Scalars["timestamptz"]>;
  description?: Maybe<Scalars["String"]>;
  director_id?: Maybe<Scalars["uuid"]>;
  id?: Maybe<Scalars["uuid"]>;
  imdb_rating?: Maybe<Scalars["numeric"]>;
  imdb_votes?: Maybe<Scalars["numeric"]>;
  poster?: Maybe<Scalars["String"]>;
  release_date?: Maybe<Scalars["date"]>;
  release_year?: Maybe<Scalars["numeric"]>;
  title?: Maybe<Scalars["String"]>;
  trailer_embed?: Maybe<Scalars["String"]>;
  updated_at?: Maybe<Scalars["timestamptz"]>;
};

/** order by max() on columns of table "movie" */
export type Movie_Max_Order_By = {
  created_at?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  director_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  imdb_rating?: InputMaybe<Order_By>;
  imdb_votes?: InputMaybe<Order_By>;
  poster?: InputMaybe<Order_By>;
  release_date?: InputMaybe<Order_By>;
  release_year?: InputMaybe<Order_By>;
  title?: InputMaybe<Order_By>;
  trailer_embed?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Movie_Min_Fields = {
  __typename?: "movie_min_fields";
  created_at?: Maybe<Scalars["timestamptz"]>;
  description?: Maybe<Scalars["String"]>;
  director_id?: Maybe<Scalars["uuid"]>;
  id?: Maybe<Scalars["uuid"]>;
  imdb_rating?: Maybe<Scalars["numeric"]>;
  imdb_votes?: Maybe<Scalars["numeric"]>;
  poster?: Maybe<Scalars["String"]>;
  release_date?: Maybe<Scalars["date"]>;
  release_year?: Maybe<Scalars["numeric"]>;
  title?: Maybe<Scalars["String"]>;
  trailer_embed?: Maybe<Scalars["String"]>;
  updated_at?: Maybe<Scalars["timestamptz"]>;
};

/** order by min() on columns of table "movie" */
export type Movie_Min_Order_By = {
  created_at?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  director_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  imdb_rating?: InputMaybe<Order_By>;
  imdb_votes?: InputMaybe<Order_By>;
  poster?: InputMaybe<Order_By>;
  release_date?: InputMaybe<Order_By>;
  release_year?: InputMaybe<Order_By>;
  title?: InputMaybe<Order_By>;
  trailer_embed?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** Ordering options when selecting data from "movie". */
export type Movie_Order_By = {
  actors_aggregate?: InputMaybe<Movie_Cast_Aggregate_Order_By>;
  created_at?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  director?: InputMaybe<Director_Order_By>;
  director_id?: InputMaybe<Order_By>;
  genres_aggregate?: InputMaybe<Movie_Genre_Aggregate_Order_By>;
  id?: InputMaybe<Order_By>;
  imdb_rating?: InputMaybe<Order_By>;
  imdb_votes?: InputMaybe<Order_By>;
  poster?: InputMaybe<Order_By>;
  ratings_aggregate?: InputMaybe<Movie_Rating_Aggregate_Order_By>;
  release_date?: InputMaybe<Order_By>;
  release_year?: InputMaybe<Order_By>;
  similar_movies_aggregate?: InputMaybe<Similar_Movie_Aggregate_Order_By>;
  title?: InputMaybe<Order_By>;
  trailer_embed?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user_prefs_aggregate?: InputMaybe<User_Movie_Pref_Aggregate_Order_By>;
};

/** Ratings of the movies */
export type Movie_Rating = {
  __typename?: "movie_rating";
  created_at: Scalars["timestamptz"];
  id: Scalars["uuid"];
  /** An object relationship */
  movie?: Maybe<Movie>;
  movie_id: Scalars["uuid"];
  rate: Scalars["numeric"];
  updated_at: Scalars["timestamptz"];
  /** An object relationship */
  user?: Maybe<User>;
  user_id: Scalars["uuid"];
};

/** aggregated selection of "movie_rating" */
export type Movie_Rating_Aggregate = {
  __typename?: "movie_rating_aggregate";
  aggregate?: Maybe<Movie_Rating_Aggregate_Fields>;
  nodes: Array<Movie_Rating>;
};

/** aggregate fields of "movie_rating" */
export type Movie_Rating_Aggregate_Fields = {
  __typename?: "movie_rating_aggregate_fields";
  avg?: Maybe<Movie_Rating_Avg_Fields>;
  count: Scalars["Int"];
  max?: Maybe<Movie_Rating_Max_Fields>;
  min?: Maybe<Movie_Rating_Min_Fields>;
  stddev?: Maybe<Movie_Rating_Stddev_Fields>;
  stddev_pop?: Maybe<Movie_Rating_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Movie_Rating_Stddev_Samp_Fields>;
  sum?: Maybe<Movie_Rating_Sum_Fields>;
  var_pop?: Maybe<Movie_Rating_Var_Pop_Fields>;
  var_samp?: Maybe<Movie_Rating_Var_Samp_Fields>;
  variance?: Maybe<Movie_Rating_Variance_Fields>;
};

/** aggregate fields of "movie_rating" */
export type Movie_Rating_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Movie_Rating_Select_Column>>;
  distinct?: InputMaybe<Scalars["Boolean"]>;
};

/** order by aggregate values of table "movie_rating" */
export type Movie_Rating_Aggregate_Order_By = {
  avg?: InputMaybe<Movie_Rating_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Movie_Rating_Max_Order_By>;
  min?: InputMaybe<Movie_Rating_Min_Order_By>;
  stddev?: InputMaybe<Movie_Rating_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Movie_Rating_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Movie_Rating_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Movie_Rating_Sum_Order_By>;
  var_pop?: InputMaybe<Movie_Rating_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Movie_Rating_Var_Samp_Order_By>;
  variance?: InputMaybe<Movie_Rating_Variance_Order_By>;
};

/** aggregate avg on columns */
export type Movie_Rating_Avg_Fields = {
  __typename?: "movie_rating_avg_fields";
  rate?: Maybe<Scalars["Float"]>;
};

/** order by avg() on columns of table "movie_rating" */
export type Movie_Rating_Avg_Order_By = {
  rate?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "movie_rating". All fields are combined with a logical 'AND'. */
export type Movie_Rating_Bool_Exp = {
  _and?: InputMaybe<Array<Movie_Rating_Bool_Exp>>;
  _not?: InputMaybe<Movie_Rating_Bool_Exp>;
  _or?: InputMaybe<Array<Movie_Rating_Bool_Exp>>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  movie?: InputMaybe<Movie_Bool_Exp>;
  movie_id?: InputMaybe<Uuid_Comparison_Exp>;
  rate?: InputMaybe<Numeric_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  user?: InputMaybe<User_Bool_Exp>;
  user_id?: InputMaybe<Uuid_Comparison_Exp>;
};

/** aggregate max on columns */
export type Movie_Rating_Max_Fields = {
  __typename?: "movie_rating_max_fields";
  created_at?: Maybe<Scalars["timestamptz"]>;
  id?: Maybe<Scalars["uuid"]>;
  movie_id?: Maybe<Scalars["uuid"]>;
  rate?: Maybe<Scalars["numeric"]>;
  updated_at?: Maybe<Scalars["timestamptz"]>;
  user_id?: Maybe<Scalars["uuid"]>;
};

/** order by max() on columns of table "movie_rating" */
export type Movie_Rating_Max_Order_By = {
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  movie_id?: InputMaybe<Order_By>;
  rate?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Movie_Rating_Min_Fields = {
  __typename?: "movie_rating_min_fields";
  created_at?: Maybe<Scalars["timestamptz"]>;
  id?: Maybe<Scalars["uuid"]>;
  movie_id?: Maybe<Scalars["uuid"]>;
  rate?: Maybe<Scalars["numeric"]>;
  updated_at?: Maybe<Scalars["timestamptz"]>;
  user_id?: Maybe<Scalars["uuid"]>;
};

/** order by min() on columns of table "movie_rating" */
export type Movie_Rating_Min_Order_By = {
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  movie_id?: InputMaybe<Order_By>;
  rate?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** Ordering options when selecting data from "movie_rating". */
export type Movie_Rating_Order_By = {
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  movie?: InputMaybe<Movie_Order_By>;
  movie_id?: InputMaybe<Order_By>;
  rate?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user?: InputMaybe<User_Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** select columns of table "movie_rating" */
export enum Movie_Rating_Select_Column {
  /** column name */
  CreatedAt = "created_at",
  /** column name */
  Id = "id",
  /** column name */
  MovieId = "movie_id",
  /** column name */
  Rate = "rate",
  /** column name */
  UpdatedAt = "updated_at",
  /** column name */
  UserId = "user_id",
}

/** aggregate stddev on columns */
export type Movie_Rating_Stddev_Fields = {
  __typename?: "movie_rating_stddev_fields";
  rate?: Maybe<Scalars["Float"]>;
};

/** order by stddev() on columns of table "movie_rating" */
export type Movie_Rating_Stddev_Order_By = {
  rate?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Movie_Rating_Stddev_Pop_Fields = {
  __typename?: "movie_rating_stddev_pop_fields";
  rate?: Maybe<Scalars["Float"]>;
};

/** order by stddev_pop() on columns of table "movie_rating" */
export type Movie_Rating_Stddev_Pop_Order_By = {
  rate?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Movie_Rating_Stddev_Samp_Fields = {
  __typename?: "movie_rating_stddev_samp_fields";
  rate?: Maybe<Scalars["Float"]>;
};

/** order by stddev_samp() on columns of table "movie_rating" */
export type Movie_Rating_Stddev_Samp_Order_By = {
  rate?: InputMaybe<Order_By>;
};

/** aggregate sum on columns */
export type Movie_Rating_Sum_Fields = {
  __typename?: "movie_rating_sum_fields";
  rate?: Maybe<Scalars["numeric"]>;
};

/** order by sum() on columns of table "movie_rating" */
export type Movie_Rating_Sum_Order_By = {
  rate?: InputMaybe<Order_By>;
};

/** aggregate var_pop on columns */
export type Movie_Rating_Var_Pop_Fields = {
  __typename?: "movie_rating_var_pop_fields";
  rate?: Maybe<Scalars["Float"]>;
};

/** order by var_pop() on columns of table "movie_rating" */
export type Movie_Rating_Var_Pop_Order_By = {
  rate?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Movie_Rating_Var_Samp_Fields = {
  __typename?: "movie_rating_var_samp_fields";
  rate?: Maybe<Scalars["Float"]>;
};

/** order by var_samp() on columns of table "movie_rating" */
export type Movie_Rating_Var_Samp_Order_By = {
  rate?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Movie_Rating_Variance_Fields = {
  __typename?: "movie_rating_variance_fields";
  rate?: Maybe<Scalars["Float"]>;
};

/** order by variance() on columns of table "movie_rating" */
export type Movie_Rating_Variance_Order_By = {
  rate?: InputMaybe<Order_By>;
};

/** select columns of table "movie" */
export enum Movie_Select_Column {
  /** column name */
  CreatedAt = "created_at",
  /** column name */
  Description = "description",
  /** column name */
  DirectorId = "director_id",
  /** column name */
  Id = "id",
  /** column name */
  ImdbRating = "imdb_rating",
  /** column name */
  ImdbVotes = "imdb_votes",
  /** column name */
  Poster = "poster",
  /** column name */
  ReleaseDate = "release_date",
  /** column name */
  ReleaseYear = "release_year",
  /** column name */
  Title = "title",
  /** column name */
  TrailerEmbed = "trailer_embed",
  /** column name */
  UpdatedAt = "updated_at",
}

/** aggregate stddev on columns */
export type Movie_Stddev_Fields = {
  __typename?: "movie_stddev_fields";
  imdb_rating?: Maybe<Scalars["Float"]>;
  imdb_votes?: Maybe<Scalars["Float"]>;
  release_year?: Maybe<Scalars["Float"]>;
};

/** order by stddev() on columns of table "movie" */
export type Movie_Stddev_Order_By = {
  imdb_rating?: InputMaybe<Order_By>;
  imdb_votes?: InputMaybe<Order_By>;
  release_year?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Movie_Stddev_Pop_Fields = {
  __typename?: "movie_stddev_pop_fields";
  imdb_rating?: Maybe<Scalars["Float"]>;
  imdb_votes?: Maybe<Scalars["Float"]>;
  release_year?: Maybe<Scalars["Float"]>;
};

/** order by stddev_pop() on columns of table "movie" */
export type Movie_Stddev_Pop_Order_By = {
  imdb_rating?: InputMaybe<Order_By>;
  imdb_votes?: InputMaybe<Order_By>;
  release_year?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Movie_Stddev_Samp_Fields = {
  __typename?: "movie_stddev_samp_fields";
  imdb_rating?: Maybe<Scalars["Float"]>;
  imdb_votes?: Maybe<Scalars["Float"]>;
  release_year?: Maybe<Scalars["Float"]>;
};

/** order by stddev_samp() on columns of table "movie" */
export type Movie_Stddev_Samp_Order_By = {
  imdb_rating?: InputMaybe<Order_By>;
  imdb_votes?: InputMaybe<Order_By>;
  release_year?: InputMaybe<Order_By>;
};

/** aggregate sum on columns */
export type Movie_Sum_Fields = {
  __typename?: "movie_sum_fields";
  imdb_rating?: Maybe<Scalars["numeric"]>;
  imdb_votes?: Maybe<Scalars["numeric"]>;
  release_year?: Maybe<Scalars["numeric"]>;
};

/** order by sum() on columns of table "movie" */
export type Movie_Sum_Order_By = {
  imdb_rating?: InputMaybe<Order_By>;
  imdb_votes?: InputMaybe<Order_By>;
  release_year?: InputMaybe<Order_By>;
};

/** aggregate var_pop on columns */
export type Movie_Var_Pop_Fields = {
  __typename?: "movie_var_pop_fields";
  imdb_rating?: Maybe<Scalars["Float"]>;
  imdb_votes?: Maybe<Scalars["Float"]>;
  release_year?: Maybe<Scalars["Float"]>;
};

/** order by var_pop() on columns of table "movie" */
export type Movie_Var_Pop_Order_By = {
  imdb_rating?: InputMaybe<Order_By>;
  imdb_votes?: InputMaybe<Order_By>;
  release_year?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Movie_Var_Samp_Fields = {
  __typename?: "movie_var_samp_fields";
  imdb_rating?: Maybe<Scalars["Float"]>;
  imdb_votes?: Maybe<Scalars["Float"]>;
  release_year?: Maybe<Scalars["Float"]>;
};

/** order by var_samp() on columns of table "movie" */
export type Movie_Var_Samp_Order_By = {
  imdb_rating?: InputMaybe<Order_By>;
  imdb_votes?: InputMaybe<Order_By>;
  release_year?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Movie_Variance_Fields = {
  __typename?: "movie_variance_fields";
  imdb_rating?: Maybe<Scalars["Float"]>;
  imdb_votes?: Maybe<Scalars["Float"]>;
  release_year?: Maybe<Scalars["Float"]>;
};

/** order by variance() on columns of table "movie" */
export type Movie_Variance_Order_By = {
  imdb_rating?: InputMaybe<Order_By>;
  imdb_votes?: InputMaybe<Order_By>;
  release_year?: InputMaybe<Order_By>;
};

/** mutation root */
export type Mutation_Root = {
  __typename?: "mutation_root";
  /** Sign */
  sign?: Maybe<SignOutput>;
};

/** mutation root */
export type Mutation_RootSignArgs = {
  arg1: SignInput;
};

export type Numeric_Cast_Exp = {
  String?: InputMaybe<String_Comparison_Exp>;
};

/** Boolean expression to compare columns of type "numeric". All fields are combined with logical 'AND'. */
export type Numeric_Comparison_Exp = {
  _cast?: InputMaybe<Numeric_Cast_Exp>;
  _eq?: InputMaybe<Scalars["numeric"]>;
  _gt?: InputMaybe<Scalars["numeric"]>;
  _gte?: InputMaybe<Scalars["numeric"]>;
  _in?: InputMaybe<Array<Scalars["numeric"]>>;
  _is_null?: InputMaybe<Scalars["Boolean"]>;
  _lt?: InputMaybe<Scalars["numeric"]>;
  _lte?: InputMaybe<Scalars["numeric"]>;
  _neq?: InputMaybe<Scalars["numeric"]>;
  _nin?: InputMaybe<Array<Scalars["numeric"]>>;
};

/** column ordering options */
export enum Order_By {
  /** in ascending order, nulls last */
  Asc = "asc",
  /** in ascending order, nulls first */
  AscNullsFirst = "asc_nulls_first",
  /** in ascending order, nulls last */
  AscNullsLast = "asc_nulls_last",
  /** in descending order, nulls first */
  Desc = "desc",
  /** in descending order, nulls first */
  DescNullsFirst = "desc_nulls_first",
  /** in descending order, nulls last */
  DescNullsLast = "desc_nulls_last",
}

export type Query_Root = {
  __typename?: "query_root";
  /** fetch data from the table: "actor" */
  actor: Array<Actor>;
  /** fetch aggregated fields from the table: "actor" */
  actor_aggregate: Actor_Aggregate;
  /** fetch data from the table: "actor" using primary key columns */
  actor_by_pk?: Maybe<Actor>;
  /** fetch data from the table: "actor_rating" */
  actor_rating: Array<Actor_Rating>;
  /** fetch aggregated fields from the table: "actor_rating" */
  actor_rating_aggregate: Actor_Rating_Aggregate;
  /** fetch data from the table: "actor_rating" using primary key columns */
  actor_rating_by_pk?: Maybe<Actor_Rating>;
  /** fetch data from the table: "director" */
  director: Array<Director>;
  /** fetch aggregated fields from the table: "director" */
  director_aggregate: Director_Aggregate;
  /** fetch data from the table: "director" using primary key columns */
  director_by_pk?: Maybe<Director>;
  /** fetch data from the table: "director_rating" */
  director_rating: Array<Director_Rating>;
  /** fetch aggregated fields from the table: "director_rating" */
  director_rating_aggregate: Director_Rating_Aggregate;
  /** fetch data from the table: "director_rating" using primary key columns */
  director_rating_by_pk?: Maybe<Director_Rating>;
  /** fetch data from the table: "genre" */
  genre: Array<Genre>;
  /** fetch aggregated fields from the table: "genre" */
  genre_aggregate: Genre_Aggregate;
  /** fetch data from the table: "genre" using primary key columns */
  genre_by_pk?: Maybe<Genre>;
  /** fetch data from the table: "movie" */
  movie: Array<Movie>;
  /** fetch aggregated fields from the table: "movie" */
  movie_aggregate: Movie_Aggregate;
  /** fetch data from the table: "movie" using primary key columns */
  movie_by_pk?: Maybe<Movie>;
  /** fetch data from the table: "movie_cast" */
  movie_cast: Array<Movie_Cast>;
  /** fetch aggregated fields from the table: "movie_cast" */
  movie_cast_aggregate: Movie_Cast_Aggregate;
  /** fetch data from the table: "movie_cast" using primary key columns */
  movie_cast_by_pk?: Maybe<Movie_Cast>;
  /** fetch data from the table: "movie_genre" */
  movie_genre: Array<Movie_Genre>;
  /** fetch aggregated fields from the table: "movie_genre" */
  movie_genre_aggregate: Movie_Genre_Aggregate;
  /** fetch data from the table: "movie_genre" using primary key columns */
  movie_genre_by_pk?: Maybe<Movie_Genre>;
  /** fetch data from the table: "movie_rating" */
  movie_rating: Array<Movie_Rating>;
  /** fetch aggregated fields from the table: "movie_rating" */
  movie_rating_aggregate: Movie_Rating_Aggregate;
  /** fetch data from the table: "movie_rating" using primary key columns */
  movie_rating_by_pk?: Maybe<Movie_Rating>;
  /** fetch data from the table: "similar_movie" */
  similar_movie: Array<Similar_Movie>;
  /** fetch aggregated fields from the table: "similar_movie" */
  similar_movie_aggregate: Similar_Movie_Aggregate;
  /** fetch data from the table: "similar_movie" using primary key columns */
  similar_movie_by_pk?: Maybe<Similar_Movie>;
  /** fetch data from the table: "user" */
  user: Array<User>;
  /** fetch aggregated fields from the table: "user" */
  user_aggregate: User_Aggregate;
  /** fetch data from the table: "user_director_pref" */
  user_director_pref: Array<User_Director_Pref>;
  /** fetch aggregated fields from the table: "user_director_pref" */
  user_director_pref_aggregate: User_Director_Pref_Aggregate;
  /** fetch data from the table: "user_director_pref" using primary key columns */
  user_director_pref_by_pk?: Maybe<User_Director_Pref>;
  /** fetch data from the table: "user_genre_pref" */
  user_genre_pref: Array<User_Genre_Pref>;
  /** fetch aggregated fields from the table: "user_genre_pref" */
  user_genre_pref_aggregate: User_Genre_Pref_Aggregate;
  /** fetch data from the table: "user_genre_pref" using primary key columns */
  user_genre_pref_by_pk?: Maybe<User_Genre_Pref>;
  /** fetch data from the table: "user_movie_pref" */
  user_movie_pref: Array<User_Movie_Pref>;
  /** fetch aggregated fields from the table: "user_movie_pref" */
  user_movie_pref_aggregate: User_Movie_Pref_Aggregate;
  /** fetch data from the table: "user_movie_pref" using primary key columns */
  user_movie_pref_by_pk?: Maybe<User_Movie_Pref>;
};

export type Query_RootActorArgs = {
  distinct_on?: InputMaybe<Array<Actor_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<Actor_Order_By>>;
  where?: InputMaybe<Actor_Bool_Exp>;
};

export type Query_RootActor_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Actor_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<Actor_Order_By>>;
  where?: InputMaybe<Actor_Bool_Exp>;
};

export type Query_RootActor_By_PkArgs = {
  id: Scalars["uuid"];
};

export type Query_RootActor_RatingArgs = {
  distinct_on?: InputMaybe<Array<Actor_Rating_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<Actor_Rating_Order_By>>;
  where?: InputMaybe<Actor_Rating_Bool_Exp>;
};

export type Query_RootActor_Rating_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Actor_Rating_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<Actor_Rating_Order_By>>;
  where?: InputMaybe<Actor_Rating_Bool_Exp>;
};

export type Query_RootActor_Rating_By_PkArgs = {
  id: Scalars["uuid"];
};

export type Query_RootDirectorArgs = {
  distinct_on?: InputMaybe<Array<Director_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<Director_Order_By>>;
  where?: InputMaybe<Director_Bool_Exp>;
};

export type Query_RootDirector_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Director_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<Director_Order_By>>;
  where?: InputMaybe<Director_Bool_Exp>;
};

export type Query_RootDirector_By_PkArgs = {
  id: Scalars["uuid"];
};

export type Query_RootDirector_RatingArgs = {
  distinct_on?: InputMaybe<Array<Director_Rating_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<Director_Rating_Order_By>>;
  where?: InputMaybe<Director_Rating_Bool_Exp>;
};

export type Query_RootDirector_Rating_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Director_Rating_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<Director_Rating_Order_By>>;
  where?: InputMaybe<Director_Rating_Bool_Exp>;
};

export type Query_RootDirector_Rating_By_PkArgs = {
  id: Scalars["uuid"];
};

export type Query_RootGenreArgs = {
  distinct_on?: InputMaybe<Array<Genre_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<Genre_Order_By>>;
  where?: InputMaybe<Genre_Bool_Exp>;
};

export type Query_RootGenre_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Genre_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<Genre_Order_By>>;
  where?: InputMaybe<Genre_Bool_Exp>;
};

export type Query_RootGenre_By_PkArgs = {
  id: Scalars["uuid"];
};

export type Query_RootMovieArgs = {
  distinct_on?: InputMaybe<Array<Movie_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<Movie_Order_By>>;
  where?: InputMaybe<Movie_Bool_Exp>;
};

export type Query_RootMovie_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Movie_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<Movie_Order_By>>;
  where?: InputMaybe<Movie_Bool_Exp>;
};

export type Query_RootMovie_By_PkArgs = {
  id: Scalars["uuid"];
};

export type Query_RootMovie_CastArgs = {
  distinct_on?: InputMaybe<Array<Movie_Cast_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<Movie_Cast_Order_By>>;
  where?: InputMaybe<Movie_Cast_Bool_Exp>;
};

export type Query_RootMovie_Cast_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Movie_Cast_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<Movie_Cast_Order_By>>;
  where?: InputMaybe<Movie_Cast_Bool_Exp>;
};

export type Query_RootMovie_Cast_By_PkArgs = {
  id: Scalars["uuid"];
};

export type Query_RootMovie_GenreArgs = {
  distinct_on?: InputMaybe<Array<Movie_Genre_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<Movie_Genre_Order_By>>;
  where?: InputMaybe<Movie_Genre_Bool_Exp>;
};

export type Query_RootMovie_Genre_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Movie_Genre_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<Movie_Genre_Order_By>>;
  where?: InputMaybe<Movie_Genre_Bool_Exp>;
};

export type Query_RootMovie_Genre_By_PkArgs = {
  id: Scalars["uuid"];
};

export type Query_RootMovie_RatingArgs = {
  distinct_on?: InputMaybe<Array<Movie_Rating_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<Movie_Rating_Order_By>>;
  where?: InputMaybe<Movie_Rating_Bool_Exp>;
};

export type Query_RootMovie_Rating_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Movie_Rating_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<Movie_Rating_Order_By>>;
  where?: InputMaybe<Movie_Rating_Bool_Exp>;
};

export type Query_RootMovie_Rating_By_PkArgs = {
  id: Scalars["uuid"];
};

export type Query_RootSimilar_MovieArgs = {
  distinct_on?: InputMaybe<Array<Similar_Movie_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<Similar_Movie_Order_By>>;
  where?: InputMaybe<Similar_Movie_Bool_Exp>;
};

export type Query_RootSimilar_Movie_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Similar_Movie_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<Similar_Movie_Order_By>>;
  where?: InputMaybe<Similar_Movie_Bool_Exp>;
};

export type Query_RootSimilar_Movie_By_PkArgs = {
  id: Scalars["uuid"];
};

export type Query_RootUserArgs = {
  distinct_on?: InputMaybe<Array<User_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<User_Order_By>>;
  where?: InputMaybe<User_Bool_Exp>;
};

export type Query_RootUser_AggregateArgs = {
  distinct_on?: InputMaybe<Array<User_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<User_Order_By>>;
  where?: InputMaybe<User_Bool_Exp>;
};

export type Query_RootUser_Director_PrefArgs = {
  distinct_on?: InputMaybe<Array<User_Director_Pref_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<User_Director_Pref_Order_By>>;
  where?: InputMaybe<User_Director_Pref_Bool_Exp>;
};

export type Query_RootUser_Director_Pref_AggregateArgs = {
  distinct_on?: InputMaybe<Array<User_Director_Pref_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<User_Director_Pref_Order_By>>;
  where?: InputMaybe<User_Director_Pref_Bool_Exp>;
};

export type Query_RootUser_Director_Pref_By_PkArgs = {
  id: Scalars["uuid"];
};

export type Query_RootUser_Genre_PrefArgs = {
  distinct_on?: InputMaybe<Array<User_Genre_Pref_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<User_Genre_Pref_Order_By>>;
  where?: InputMaybe<User_Genre_Pref_Bool_Exp>;
};

export type Query_RootUser_Genre_Pref_AggregateArgs = {
  distinct_on?: InputMaybe<Array<User_Genre_Pref_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<User_Genre_Pref_Order_By>>;
  where?: InputMaybe<User_Genre_Pref_Bool_Exp>;
};

export type Query_RootUser_Genre_Pref_By_PkArgs = {
  id: Scalars["uuid"];
};

export type Query_RootUser_Movie_PrefArgs = {
  distinct_on?: InputMaybe<Array<User_Movie_Pref_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<User_Movie_Pref_Order_By>>;
  where?: InputMaybe<User_Movie_Pref_Bool_Exp>;
};

export type Query_RootUser_Movie_Pref_AggregateArgs = {
  distinct_on?: InputMaybe<Array<User_Movie_Pref_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<User_Movie_Pref_Order_By>>;
  where?: InputMaybe<User_Movie_Pref_Bool_Exp>;
};

export type Query_RootUser_Movie_Pref_By_PkArgs = {
  id: Scalars["uuid"];
};

/** Similar Movies */
export type Similar_Movie = {
  __typename?: "similar_movie";
  /** An object relationship */
  child_movie?: Maybe<Movie>;
  child_movie_id: Scalars["uuid"];
  created_at: Scalars["timestamptz"];
  id: Scalars["uuid"];
  /** An object relationship */
  parent_movie?: Maybe<Movie>;
  parent_movie_id: Scalars["uuid"];
  updated_at: Scalars["timestamptz"];
};

/** aggregated selection of "similar_movie" */
export type Similar_Movie_Aggregate = {
  __typename?: "similar_movie_aggregate";
  aggregate?: Maybe<Similar_Movie_Aggregate_Fields>;
  nodes: Array<Similar_Movie>;
};

/** aggregate fields of "similar_movie" */
export type Similar_Movie_Aggregate_Fields = {
  __typename?: "similar_movie_aggregate_fields";
  count: Scalars["Int"];
  max?: Maybe<Similar_Movie_Max_Fields>;
  min?: Maybe<Similar_Movie_Min_Fields>;
};

/** aggregate fields of "similar_movie" */
export type Similar_Movie_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Similar_Movie_Select_Column>>;
  distinct?: InputMaybe<Scalars["Boolean"]>;
};

/** order by aggregate values of table "similar_movie" */
export type Similar_Movie_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Similar_Movie_Max_Order_By>;
  min?: InputMaybe<Similar_Movie_Min_Order_By>;
};

/** Boolean expression to filter rows from the table "similar_movie". All fields are combined with a logical 'AND'. */
export type Similar_Movie_Bool_Exp = {
  _and?: InputMaybe<Array<Similar_Movie_Bool_Exp>>;
  _not?: InputMaybe<Similar_Movie_Bool_Exp>;
  _or?: InputMaybe<Array<Similar_Movie_Bool_Exp>>;
  child_movie?: InputMaybe<Movie_Bool_Exp>;
  child_movie_id?: InputMaybe<Uuid_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  parent_movie?: InputMaybe<Movie_Bool_Exp>;
  parent_movie_id?: InputMaybe<Uuid_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** aggregate max on columns */
export type Similar_Movie_Max_Fields = {
  __typename?: "similar_movie_max_fields";
  child_movie_id?: Maybe<Scalars["uuid"]>;
  created_at?: Maybe<Scalars["timestamptz"]>;
  id?: Maybe<Scalars["uuid"]>;
  parent_movie_id?: Maybe<Scalars["uuid"]>;
  updated_at?: Maybe<Scalars["timestamptz"]>;
};

/** order by max() on columns of table "similar_movie" */
export type Similar_Movie_Max_Order_By = {
  child_movie_id?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  parent_movie_id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Similar_Movie_Min_Fields = {
  __typename?: "similar_movie_min_fields";
  child_movie_id?: Maybe<Scalars["uuid"]>;
  created_at?: Maybe<Scalars["timestamptz"]>;
  id?: Maybe<Scalars["uuid"]>;
  parent_movie_id?: Maybe<Scalars["uuid"]>;
  updated_at?: Maybe<Scalars["timestamptz"]>;
};

/** order by min() on columns of table "similar_movie" */
export type Similar_Movie_Min_Order_By = {
  child_movie_id?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  parent_movie_id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** Ordering options when selecting data from "similar_movie". */
export type Similar_Movie_Order_By = {
  child_movie?: InputMaybe<Movie_Order_By>;
  child_movie_id?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  parent_movie?: InputMaybe<Movie_Order_By>;
  parent_movie_id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** select columns of table "similar_movie" */
export enum Similar_Movie_Select_Column {
  /** column name */
  ChildMovieId = "child_movie_id",
  /** column name */
  CreatedAt = "created_at",
  /** column name */
  Id = "id",
  /** column name */
  ParentMovieId = "parent_movie_id",
  /** column name */
  UpdatedAt = "updated_at",
}

export type Subscription_Root = {
  __typename?: "subscription_root";
  /** fetch data from the table: "actor" */
  actor: Array<Actor>;
  /** fetch aggregated fields from the table: "actor" */
  actor_aggregate: Actor_Aggregate;
  /** fetch data from the table: "actor" using primary key columns */
  actor_by_pk?: Maybe<Actor>;
  /** fetch data from the table: "actor_rating" */
  actor_rating: Array<Actor_Rating>;
  /** fetch aggregated fields from the table: "actor_rating" */
  actor_rating_aggregate: Actor_Rating_Aggregate;
  /** fetch data from the table: "actor_rating" using primary key columns */
  actor_rating_by_pk?: Maybe<Actor_Rating>;
  /** fetch data from the table: "director" */
  director: Array<Director>;
  /** fetch aggregated fields from the table: "director" */
  director_aggregate: Director_Aggregate;
  /** fetch data from the table: "director" using primary key columns */
  director_by_pk?: Maybe<Director>;
  /** fetch data from the table: "director_rating" */
  director_rating: Array<Director_Rating>;
  /** fetch aggregated fields from the table: "director_rating" */
  director_rating_aggregate: Director_Rating_Aggregate;
  /** fetch data from the table: "director_rating" using primary key columns */
  director_rating_by_pk?: Maybe<Director_Rating>;
  /** fetch data from the table: "genre" */
  genre: Array<Genre>;
  /** fetch aggregated fields from the table: "genre" */
  genre_aggregate: Genre_Aggregate;
  /** fetch data from the table: "genre" using primary key columns */
  genre_by_pk?: Maybe<Genre>;
  /** fetch data from the table: "movie" */
  movie: Array<Movie>;
  /** fetch aggregated fields from the table: "movie" */
  movie_aggregate: Movie_Aggregate;
  /** fetch data from the table: "movie" using primary key columns */
  movie_by_pk?: Maybe<Movie>;
  /** fetch data from the table: "movie_cast" */
  movie_cast: Array<Movie_Cast>;
  /** fetch aggregated fields from the table: "movie_cast" */
  movie_cast_aggregate: Movie_Cast_Aggregate;
  /** fetch data from the table: "movie_cast" using primary key columns */
  movie_cast_by_pk?: Maybe<Movie_Cast>;
  /** fetch data from the table: "movie_genre" */
  movie_genre: Array<Movie_Genre>;
  /** fetch aggregated fields from the table: "movie_genre" */
  movie_genre_aggregate: Movie_Genre_Aggregate;
  /** fetch data from the table: "movie_genre" using primary key columns */
  movie_genre_by_pk?: Maybe<Movie_Genre>;
  /** fetch data from the table: "movie_rating" */
  movie_rating: Array<Movie_Rating>;
  /** fetch aggregated fields from the table: "movie_rating" */
  movie_rating_aggregate: Movie_Rating_Aggregate;
  /** fetch data from the table: "movie_rating" using primary key columns */
  movie_rating_by_pk?: Maybe<Movie_Rating>;
  /** fetch data from the table: "similar_movie" */
  similar_movie: Array<Similar_Movie>;
  /** fetch aggregated fields from the table: "similar_movie" */
  similar_movie_aggregate: Similar_Movie_Aggregate;
  /** fetch data from the table: "similar_movie" using primary key columns */
  similar_movie_by_pk?: Maybe<Similar_Movie>;
  /** fetch data from the table: "user" */
  user: Array<User>;
  /** fetch aggregated fields from the table: "user" */
  user_aggregate: User_Aggregate;
  /** fetch data from the table: "user_director_pref" */
  user_director_pref: Array<User_Director_Pref>;
  /** fetch aggregated fields from the table: "user_director_pref" */
  user_director_pref_aggregate: User_Director_Pref_Aggregate;
  /** fetch data from the table: "user_director_pref" using primary key columns */
  user_director_pref_by_pk?: Maybe<User_Director_Pref>;
  /** fetch data from the table: "user_genre_pref" */
  user_genre_pref: Array<User_Genre_Pref>;
  /** fetch aggregated fields from the table: "user_genre_pref" */
  user_genre_pref_aggregate: User_Genre_Pref_Aggregate;
  /** fetch data from the table: "user_genre_pref" using primary key columns */
  user_genre_pref_by_pk?: Maybe<User_Genre_Pref>;
  /** fetch data from the table: "user_movie_pref" */
  user_movie_pref: Array<User_Movie_Pref>;
  /** fetch aggregated fields from the table: "user_movie_pref" */
  user_movie_pref_aggregate: User_Movie_Pref_Aggregate;
  /** fetch data from the table: "user_movie_pref" using primary key columns */
  user_movie_pref_by_pk?: Maybe<User_Movie_Pref>;
};

export type Subscription_RootActorArgs = {
  distinct_on?: InputMaybe<Array<Actor_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<Actor_Order_By>>;
  where?: InputMaybe<Actor_Bool_Exp>;
};

export type Subscription_RootActor_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Actor_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<Actor_Order_By>>;
  where?: InputMaybe<Actor_Bool_Exp>;
};

export type Subscription_RootActor_By_PkArgs = {
  id: Scalars["uuid"];
};

export type Subscription_RootActor_RatingArgs = {
  distinct_on?: InputMaybe<Array<Actor_Rating_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<Actor_Rating_Order_By>>;
  where?: InputMaybe<Actor_Rating_Bool_Exp>;
};

export type Subscription_RootActor_Rating_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Actor_Rating_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<Actor_Rating_Order_By>>;
  where?: InputMaybe<Actor_Rating_Bool_Exp>;
};

export type Subscription_RootActor_Rating_By_PkArgs = {
  id: Scalars["uuid"];
};

export type Subscription_RootDirectorArgs = {
  distinct_on?: InputMaybe<Array<Director_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<Director_Order_By>>;
  where?: InputMaybe<Director_Bool_Exp>;
};

export type Subscription_RootDirector_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Director_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<Director_Order_By>>;
  where?: InputMaybe<Director_Bool_Exp>;
};

export type Subscription_RootDirector_By_PkArgs = {
  id: Scalars["uuid"];
};

export type Subscription_RootDirector_RatingArgs = {
  distinct_on?: InputMaybe<Array<Director_Rating_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<Director_Rating_Order_By>>;
  where?: InputMaybe<Director_Rating_Bool_Exp>;
};

export type Subscription_RootDirector_Rating_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Director_Rating_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<Director_Rating_Order_By>>;
  where?: InputMaybe<Director_Rating_Bool_Exp>;
};

export type Subscription_RootDirector_Rating_By_PkArgs = {
  id: Scalars["uuid"];
};

export type Subscription_RootGenreArgs = {
  distinct_on?: InputMaybe<Array<Genre_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<Genre_Order_By>>;
  where?: InputMaybe<Genre_Bool_Exp>;
};

export type Subscription_RootGenre_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Genre_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<Genre_Order_By>>;
  where?: InputMaybe<Genre_Bool_Exp>;
};

export type Subscription_RootGenre_By_PkArgs = {
  id: Scalars["uuid"];
};

export type Subscription_RootMovieArgs = {
  distinct_on?: InputMaybe<Array<Movie_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<Movie_Order_By>>;
  where?: InputMaybe<Movie_Bool_Exp>;
};

export type Subscription_RootMovie_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Movie_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<Movie_Order_By>>;
  where?: InputMaybe<Movie_Bool_Exp>;
};

export type Subscription_RootMovie_By_PkArgs = {
  id: Scalars["uuid"];
};

export type Subscription_RootMovie_CastArgs = {
  distinct_on?: InputMaybe<Array<Movie_Cast_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<Movie_Cast_Order_By>>;
  where?: InputMaybe<Movie_Cast_Bool_Exp>;
};

export type Subscription_RootMovie_Cast_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Movie_Cast_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<Movie_Cast_Order_By>>;
  where?: InputMaybe<Movie_Cast_Bool_Exp>;
};

export type Subscription_RootMovie_Cast_By_PkArgs = {
  id: Scalars["uuid"];
};

export type Subscription_RootMovie_GenreArgs = {
  distinct_on?: InputMaybe<Array<Movie_Genre_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<Movie_Genre_Order_By>>;
  where?: InputMaybe<Movie_Genre_Bool_Exp>;
};

export type Subscription_RootMovie_Genre_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Movie_Genre_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<Movie_Genre_Order_By>>;
  where?: InputMaybe<Movie_Genre_Bool_Exp>;
};

export type Subscription_RootMovie_Genre_By_PkArgs = {
  id: Scalars["uuid"];
};

export type Subscription_RootMovie_RatingArgs = {
  distinct_on?: InputMaybe<Array<Movie_Rating_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<Movie_Rating_Order_By>>;
  where?: InputMaybe<Movie_Rating_Bool_Exp>;
};

export type Subscription_RootMovie_Rating_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Movie_Rating_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<Movie_Rating_Order_By>>;
  where?: InputMaybe<Movie_Rating_Bool_Exp>;
};

export type Subscription_RootMovie_Rating_By_PkArgs = {
  id: Scalars["uuid"];
};

export type Subscription_RootSimilar_MovieArgs = {
  distinct_on?: InputMaybe<Array<Similar_Movie_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<Similar_Movie_Order_By>>;
  where?: InputMaybe<Similar_Movie_Bool_Exp>;
};

export type Subscription_RootSimilar_Movie_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Similar_Movie_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<Similar_Movie_Order_By>>;
  where?: InputMaybe<Similar_Movie_Bool_Exp>;
};

export type Subscription_RootSimilar_Movie_By_PkArgs = {
  id: Scalars["uuid"];
};

export type Subscription_RootUserArgs = {
  distinct_on?: InputMaybe<Array<User_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<User_Order_By>>;
  where?: InputMaybe<User_Bool_Exp>;
};

export type Subscription_RootUser_AggregateArgs = {
  distinct_on?: InputMaybe<Array<User_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<User_Order_By>>;
  where?: InputMaybe<User_Bool_Exp>;
};

export type Subscription_RootUser_Director_PrefArgs = {
  distinct_on?: InputMaybe<Array<User_Director_Pref_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<User_Director_Pref_Order_By>>;
  where?: InputMaybe<User_Director_Pref_Bool_Exp>;
};

export type Subscription_RootUser_Director_Pref_AggregateArgs = {
  distinct_on?: InputMaybe<Array<User_Director_Pref_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<User_Director_Pref_Order_By>>;
  where?: InputMaybe<User_Director_Pref_Bool_Exp>;
};

export type Subscription_RootUser_Director_Pref_By_PkArgs = {
  id: Scalars["uuid"];
};

export type Subscription_RootUser_Genre_PrefArgs = {
  distinct_on?: InputMaybe<Array<User_Genre_Pref_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<User_Genre_Pref_Order_By>>;
  where?: InputMaybe<User_Genre_Pref_Bool_Exp>;
};

export type Subscription_RootUser_Genre_Pref_AggregateArgs = {
  distinct_on?: InputMaybe<Array<User_Genre_Pref_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<User_Genre_Pref_Order_By>>;
  where?: InputMaybe<User_Genre_Pref_Bool_Exp>;
};

export type Subscription_RootUser_Genre_Pref_By_PkArgs = {
  id: Scalars["uuid"];
};

export type Subscription_RootUser_Movie_PrefArgs = {
  distinct_on?: InputMaybe<Array<User_Movie_Pref_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<User_Movie_Pref_Order_By>>;
  where?: InputMaybe<User_Movie_Pref_Bool_Exp>;
};

export type Subscription_RootUser_Movie_Pref_AggregateArgs = {
  distinct_on?: InputMaybe<Array<User_Movie_Pref_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<User_Movie_Pref_Order_By>>;
  where?: InputMaybe<User_Movie_Pref_Bool_Exp>;
};

export type Subscription_RootUser_Movie_Pref_By_PkArgs = {
  id: Scalars["uuid"];
};

export type Timestamptz_Cast_Exp = {
  String?: InputMaybe<String_Comparison_Exp>;
};

/** Boolean expression to compare columns of type "timestamptz". All fields are combined with logical 'AND'. */
export type Timestamptz_Comparison_Exp = {
  _cast?: InputMaybe<Timestamptz_Cast_Exp>;
  _eq?: InputMaybe<Scalars["timestamptz"]>;
  _gt?: InputMaybe<Scalars["timestamptz"]>;
  _gte?: InputMaybe<Scalars["timestamptz"]>;
  _in?: InputMaybe<Array<Scalars["timestamptz"]>>;
  _is_null?: InputMaybe<Scalars["Boolean"]>;
  _lt?: InputMaybe<Scalars["timestamptz"]>;
  _lte?: InputMaybe<Scalars["timestamptz"]>;
  _neq?: InputMaybe<Scalars["timestamptz"]>;
  _nin?: InputMaybe<Array<Scalars["timestamptz"]>>;
};

/** Users */
export type User = {
  __typename?: "user";
  /** An array relationship */
  actor_ratings: Array<Actor_Rating>;
  /** An aggregate relationship */
  actor_ratings_aggregate: Actor_Rating_Aggregate;
  created_at: Scalars["timestamptz"];
  /** An array relationship */
  director_prefs: Array<User_Director_Pref>;
  /** An aggregate relationship */
  director_prefs_aggregate: User_Director_Pref_Aggregate;
  /** An array relationship */
  director_ratings: Array<Director_Rating>;
  /** An aggregate relationship */
  director_ratings_aggregate: Director_Rating_Aggregate;
  firstname: Scalars["String"];
  /** An array relationship */
  genre_prefs: Array<User_Genre_Pref>;
  /** An aggregate relationship */
  genre_prefs_aggregate: User_Genre_Pref_Aggregate;
  lastname: Scalars["String"];
  /** An array relationship */
  movie_prefs: Array<User_Movie_Pref>;
  /** An aggregate relationship */
  movie_prefs_aggregate: User_Movie_Pref_Aggregate;
  /** An array relationship */
  movie_ratings: Array<Movie_Rating>;
  /** An aggregate relationship */
  movie_ratings_aggregate: Movie_Rating_Aggregate;
  updated_at: Scalars["timestamptz"];
  username: Scalars["String"];
};

/** Users */
export type UserActor_RatingsArgs = {
  distinct_on?: InputMaybe<Array<Actor_Rating_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<Actor_Rating_Order_By>>;
  where?: InputMaybe<Actor_Rating_Bool_Exp>;
};

/** Users */
export type UserActor_Ratings_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Actor_Rating_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<Actor_Rating_Order_By>>;
  where?: InputMaybe<Actor_Rating_Bool_Exp>;
};

/** Users */
export type UserDirector_PrefsArgs = {
  distinct_on?: InputMaybe<Array<User_Director_Pref_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<User_Director_Pref_Order_By>>;
  where?: InputMaybe<User_Director_Pref_Bool_Exp>;
};

/** Users */
export type UserDirector_Prefs_AggregateArgs = {
  distinct_on?: InputMaybe<Array<User_Director_Pref_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<User_Director_Pref_Order_By>>;
  where?: InputMaybe<User_Director_Pref_Bool_Exp>;
};

/** Users */
export type UserDirector_RatingsArgs = {
  distinct_on?: InputMaybe<Array<Director_Rating_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<Director_Rating_Order_By>>;
  where?: InputMaybe<Director_Rating_Bool_Exp>;
};

/** Users */
export type UserDirector_Ratings_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Director_Rating_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<Director_Rating_Order_By>>;
  where?: InputMaybe<Director_Rating_Bool_Exp>;
};

/** Users */
export type UserGenre_PrefsArgs = {
  distinct_on?: InputMaybe<Array<User_Genre_Pref_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<User_Genre_Pref_Order_By>>;
  where?: InputMaybe<User_Genre_Pref_Bool_Exp>;
};

/** Users */
export type UserGenre_Prefs_AggregateArgs = {
  distinct_on?: InputMaybe<Array<User_Genre_Pref_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<User_Genre_Pref_Order_By>>;
  where?: InputMaybe<User_Genre_Pref_Bool_Exp>;
};

/** Users */
export type UserMovie_PrefsArgs = {
  distinct_on?: InputMaybe<Array<User_Movie_Pref_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<User_Movie_Pref_Order_By>>;
  where?: InputMaybe<User_Movie_Pref_Bool_Exp>;
};

/** Users */
export type UserMovie_Prefs_AggregateArgs = {
  distinct_on?: InputMaybe<Array<User_Movie_Pref_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<User_Movie_Pref_Order_By>>;
  where?: InputMaybe<User_Movie_Pref_Bool_Exp>;
};

/** Users */
export type UserMovie_RatingsArgs = {
  distinct_on?: InputMaybe<Array<Movie_Rating_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<Movie_Rating_Order_By>>;
  where?: InputMaybe<Movie_Rating_Bool_Exp>;
};

/** Users */
export type UserMovie_Ratings_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Movie_Rating_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<Movie_Rating_Order_By>>;
  where?: InputMaybe<Movie_Rating_Bool_Exp>;
};

/** aggregated selection of "user" */
export type User_Aggregate = {
  __typename?: "user_aggregate";
  aggregate?: Maybe<User_Aggregate_Fields>;
  nodes: Array<User>;
};

/** aggregate fields of "user" */
export type User_Aggregate_Fields = {
  __typename?: "user_aggregate_fields";
  count: Scalars["Int"];
  max?: Maybe<User_Max_Fields>;
  min?: Maybe<User_Min_Fields>;
};

/** aggregate fields of "user" */
export type User_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<User_Select_Column>>;
  distinct?: InputMaybe<Scalars["Boolean"]>;
};

/** Boolean expression to filter rows from the table "user". All fields are combined with a logical 'AND'. */
export type User_Bool_Exp = {
  _and?: InputMaybe<Array<User_Bool_Exp>>;
  _not?: InputMaybe<User_Bool_Exp>;
  _or?: InputMaybe<Array<User_Bool_Exp>>;
  actor_ratings?: InputMaybe<Actor_Rating_Bool_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  director_prefs?: InputMaybe<User_Director_Pref_Bool_Exp>;
  director_ratings?: InputMaybe<Director_Rating_Bool_Exp>;
  firstname?: InputMaybe<String_Comparison_Exp>;
  genre_prefs?: InputMaybe<User_Genre_Pref_Bool_Exp>;
  lastname?: InputMaybe<String_Comparison_Exp>;
  movie_prefs?: InputMaybe<User_Movie_Pref_Bool_Exp>;
  movie_ratings?: InputMaybe<Movie_Rating_Bool_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  username?: InputMaybe<String_Comparison_Exp>;
};

/** Director prefs of the users */
export type User_Director_Pref = {
  __typename?: "user_director_pref";
  created_at: Scalars["timestamptz"];
  /** An object relationship */
  director?: Maybe<Director>;
  director_id: Scalars["uuid"];
  id: Scalars["uuid"];
  updated_at: Scalars["timestamptz"];
  /** An object relationship */
  user?: Maybe<User>;
  user_id: Scalars["uuid"];
};

/** aggregated selection of "user_director_pref" */
export type User_Director_Pref_Aggregate = {
  __typename?: "user_director_pref_aggregate";
  aggregate?: Maybe<User_Director_Pref_Aggregate_Fields>;
  nodes: Array<User_Director_Pref>;
};

/** aggregate fields of "user_director_pref" */
export type User_Director_Pref_Aggregate_Fields = {
  __typename?: "user_director_pref_aggregate_fields";
  count: Scalars["Int"];
  max?: Maybe<User_Director_Pref_Max_Fields>;
  min?: Maybe<User_Director_Pref_Min_Fields>;
};

/** aggregate fields of "user_director_pref" */
export type User_Director_Pref_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<User_Director_Pref_Select_Column>>;
  distinct?: InputMaybe<Scalars["Boolean"]>;
};

/** order by aggregate values of table "user_director_pref" */
export type User_Director_Pref_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<User_Director_Pref_Max_Order_By>;
  min?: InputMaybe<User_Director_Pref_Min_Order_By>;
};

/** Boolean expression to filter rows from the table "user_director_pref". All fields are combined with a logical 'AND'. */
export type User_Director_Pref_Bool_Exp = {
  _and?: InputMaybe<Array<User_Director_Pref_Bool_Exp>>;
  _not?: InputMaybe<User_Director_Pref_Bool_Exp>;
  _or?: InputMaybe<Array<User_Director_Pref_Bool_Exp>>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  director?: InputMaybe<Director_Bool_Exp>;
  director_id?: InputMaybe<Uuid_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  user?: InputMaybe<User_Bool_Exp>;
  user_id?: InputMaybe<Uuid_Comparison_Exp>;
};

/** aggregate max on columns */
export type User_Director_Pref_Max_Fields = {
  __typename?: "user_director_pref_max_fields";
  created_at?: Maybe<Scalars["timestamptz"]>;
  director_id?: Maybe<Scalars["uuid"]>;
  id?: Maybe<Scalars["uuid"]>;
  updated_at?: Maybe<Scalars["timestamptz"]>;
  user_id?: Maybe<Scalars["uuid"]>;
};

/** order by max() on columns of table "user_director_pref" */
export type User_Director_Pref_Max_Order_By = {
  created_at?: InputMaybe<Order_By>;
  director_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type User_Director_Pref_Min_Fields = {
  __typename?: "user_director_pref_min_fields";
  created_at?: Maybe<Scalars["timestamptz"]>;
  director_id?: Maybe<Scalars["uuid"]>;
  id?: Maybe<Scalars["uuid"]>;
  updated_at?: Maybe<Scalars["timestamptz"]>;
  user_id?: Maybe<Scalars["uuid"]>;
};

/** order by min() on columns of table "user_director_pref" */
export type User_Director_Pref_Min_Order_By = {
  created_at?: InputMaybe<Order_By>;
  director_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** Ordering options when selecting data from "user_director_pref". */
export type User_Director_Pref_Order_By = {
  created_at?: InputMaybe<Order_By>;
  director?: InputMaybe<Director_Order_By>;
  director_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user?: InputMaybe<User_Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** select columns of table "user_director_pref" */
export enum User_Director_Pref_Select_Column {
  /** column name */
  CreatedAt = "created_at",
  /** column name */
  DirectorId = "director_id",
  /** column name */
  Id = "id",
  /** column name */
  UpdatedAt = "updated_at",
  /** column name */
  UserId = "user_id",
}

/** Genre prefs of the users */
export type User_Genre_Pref = {
  __typename?: "user_genre_pref";
  created_at: Scalars["timestamptz"];
  /** An object relationship */
  genre?: Maybe<Genre>;
  genre_id: Scalars["uuid"];
  id: Scalars["uuid"];
  /** An array relationship */
  movie_genres: Array<Movie_Genre>;
  /** An aggregate relationship */
  movie_genres_aggregate: Movie_Genre_Aggregate;
  updated_at: Scalars["timestamptz"];
  /** An object relationship */
  user?: Maybe<User>;
  user_id: Scalars["uuid"];
};

/** Genre prefs of the users */
export type User_Genre_PrefMovie_GenresArgs = {
  distinct_on?: InputMaybe<Array<Movie_Genre_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<Movie_Genre_Order_By>>;
  where?: InputMaybe<Movie_Genre_Bool_Exp>;
};

/** Genre prefs of the users */
export type User_Genre_PrefMovie_Genres_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Movie_Genre_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<Movie_Genre_Order_By>>;
  where?: InputMaybe<Movie_Genre_Bool_Exp>;
};

/** aggregated selection of "user_genre_pref" */
export type User_Genre_Pref_Aggregate = {
  __typename?: "user_genre_pref_aggregate";
  aggregate?: Maybe<User_Genre_Pref_Aggregate_Fields>;
  nodes: Array<User_Genre_Pref>;
};

/** aggregate fields of "user_genre_pref" */
export type User_Genre_Pref_Aggregate_Fields = {
  __typename?: "user_genre_pref_aggregate_fields";
  count: Scalars["Int"];
  max?: Maybe<User_Genre_Pref_Max_Fields>;
  min?: Maybe<User_Genre_Pref_Min_Fields>;
};

/** aggregate fields of "user_genre_pref" */
export type User_Genre_Pref_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<User_Genre_Pref_Select_Column>>;
  distinct?: InputMaybe<Scalars["Boolean"]>;
};

/** order by aggregate values of table "user_genre_pref" */
export type User_Genre_Pref_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<User_Genre_Pref_Max_Order_By>;
  min?: InputMaybe<User_Genre_Pref_Min_Order_By>;
};

/** Boolean expression to filter rows from the table "user_genre_pref". All fields are combined with a logical 'AND'. */
export type User_Genre_Pref_Bool_Exp = {
  _and?: InputMaybe<Array<User_Genre_Pref_Bool_Exp>>;
  _not?: InputMaybe<User_Genre_Pref_Bool_Exp>;
  _or?: InputMaybe<Array<User_Genre_Pref_Bool_Exp>>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  genre?: InputMaybe<Genre_Bool_Exp>;
  genre_id?: InputMaybe<Uuid_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  movie_genres?: InputMaybe<Movie_Genre_Bool_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  user?: InputMaybe<User_Bool_Exp>;
  user_id?: InputMaybe<Uuid_Comparison_Exp>;
};

/** aggregate max on columns */
export type User_Genre_Pref_Max_Fields = {
  __typename?: "user_genre_pref_max_fields";
  created_at?: Maybe<Scalars["timestamptz"]>;
  genre_id?: Maybe<Scalars["uuid"]>;
  id?: Maybe<Scalars["uuid"]>;
  updated_at?: Maybe<Scalars["timestamptz"]>;
  user_id?: Maybe<Scalars["uuid"]>;
};

/** order by max() on columns of table "user_genre_pref" */
export type User_Genre_Pref_Max_Order_By = {
  created_at?: InputMaybe<Order_By>;
  genre_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type User_Genre_Pref_Min_Fields = {
  __typename?: "user_genre_pref_min_fields";
  created_at?: Maybe<Scalars["timestamptz"]>;
  genre_id?: Maybe<Scalars["uuid"]>;
  id?: Maybe<Scalars["uuid"]>;
  updated_at?: Maybe<Scalars["timestamptz"]>;
  user_id?: Maybe<Scalars["uuid"]>;
};

/** order by min() on columns of table "user_genre_pref" */
export type User_Genre_Pref_Min_Order_By = {
  created_at?: InputMaybe<Order_By>;
  genre_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** Ordering options when selecting data from "user_genre_pref". */
export type User_Genre_Pref_Order_By = {
  created_at?: InputMaybe<Order_By>;
  genre?: InputMaybe<Genre_Order_By>;
  genre_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  movie_genres_aggregate?: InputMaybe<Movie_Genre_Aggregate_Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user?: InputMaybe<User_Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** select columns of table "user_genre_pref" */
export enum User_Genre_Pref_Select_Column {
  /** column name */
  CreatedAt = "created_at",
  /** column name */
  GenreId = "genre_id",
  /** column name */
  Id = "id",
  /** column name */
  UpdatedAt = "updated_at",
  /** column name */
  UserId = "user_id",
}

/** aggregate max on columns */
export type User_Max_Fields = {
  __typename?: "user_max_fields";
  created_at?: Maybe<Scalars["timestamptz"]>;
  firstname?: Maybe<Scalars["String"]>;
  lastname?: Maybe<Scalars["String"]>;
  updated_at?: Maybe<Scalars["timestamptz"]>;
  username?: Maybe<Scalars["String"]>;
};

/** aggregate min on columns */
export type User_Min_Fields = {
  __typename?: "user_min_fields";
  created_at?: Maybe<Scalars["timestamptz"]>;
  firstname?: Maybe<Scalars["String"]>;
  lastname?: Maybe<Scalars["String"]>;
  updated_at?: Maybe<Scalars["timestamptz"]>;
  username?: Maybe<Scalars["String"]>;
};

/** Movies pref of the users */
export type User_Movie_Pref = {
  __typename?: "user_movie_pref";
  created_at: Scalars["timestamptz"];
  id: Scalars["uuid"];
  /** An object relationship */
  movie?: Maybe<Movie>;
  movie_id: Scalars["uuid"];
  /** An array relationship */
  similar_movies: Array<Similar_Movie>;
  /** An aggregate relationship */
  similar_movies_aggregate: Similar_Movie_Aggregate;
  updated_at: Scalars["timestamptz"];
  /** An object relationship */
  user?: Maybe<User>;
  user_id: Scalars["uuid"];
};

/** Movies pref of the users */
export type User_Movie_PrefSimilar_MoviesArgs = {
  distinct_on?: InputMaybe<Array<Similar_Movie_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<Similar_Movie_Order_By>>;
  where?: InputMaybe<Similar_Movie_Bool_Exp>;
};

/** Movies pref of the users */
export type User_Movie_PrefSimilar_Movies_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Similar_Movie_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<Similar_Movie_Order_By>>;
  where?: InputMaybe<Similar_Movie_Bool_Exp>;
};

/** aggregated selection of "user_movie_pref" */
export type User_Movie_Pref_Aggregate = {
  __typename?: "user_movie_pref_aggregate";
  aggregate?: Maybe<User_Movie_Pref_Aggregate_Fields>;
  nodes: Array<User_Movie_Pref>;
};

/** aggregate fields of "user_movie_pref" */
export type User_Movie_Pref_Aggregate_Fields = {
  __typename?: "user_movie_pref_aggregate_fields";
  count: Scalars["Int"];
  max?: Maybe<User_Movie_Pref_Max_Fields>;
  min?: Maybe<User_Movie_Pref_Min_Fields>;
};

/** aggregate fields of "user_movie_pref" */
export type User_Movie_Pref_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<User_Movie_Pref_Select_Column>>;
  distinct?: InputMaybe<Scalars["Boolean"]>;
};

/** order by aggregate values of table "user_movie_pref" */
export type User_Movie_Pref_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<User_Movie_Pref_Max_Order_By>;
  min?: InputMaybe<User_Movie_Pref_Min_Order_By>;
};

/** Boolean expression to filter rows from the table "user_movie_pref". All fields are combined with a logical 'AND'. */
export type User_Movie_Pref_Bool_Exp = {
  _and?: InputMaybe<Array<User_Movie_Pref_Bool_Exp>>;
  _not?: InputMaybe<User_Movie_Pref_Bool_Exp>;
  _or?: InputMaybe<Array<User_Movie_Pref_Bool_Exp>>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  movie?: InputMaybe<Movie_Bool_Exp>;
  movie_id?: InputMaybe<Uuid_Comparison_Exp>;
  similar_movies?: InputMaybe<Similar_Movie_Bool_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  user?: InputMaybe<User_Bool_Exp>;
  user_id?: InputMaybe<Uuid_Comparison_Exp>;
};

/** aggregate max on columns */
export type User_Movie_Pref_Max_Fields = {
  __typename?: "user_movie_pref_max_fields";
  created_at?: Maybe<Scalars["timestamptz"]>;
  id?: Maybe<Scalars["uuid"]>;
  movie_id?: Maybe<Scalars["uuid"]>;
  updated_at?: Maybe<Scalars["timestamptz"]>;
  user_id?: Maybe<Scalars["uuid"]>;
};

/** order by max() on columns of table "user_movie_pref" */
export type User_Movie_Pref_Max_Order_By = {
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  movie_id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type User_Movie_Pref_Min_Fields = {
  __typename?: "user_movie_pref_min_fields";
  created_at?: Maybe<Scalars["timestamptz"]>;
  id?: Maybe<Scalars["uuid"]>;
  movie_id?: Maybe<Scalars["uuid"]>;
  updated_at?: Maybe<Scalars["timestamptz"]>;
  user_id?: Maybe<Scalars["uuid"]>;
};

/** order by min() on columns of table "user_movie_pref" */
export type User_Movie_Pref_Min_Order_By = {
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  movie_id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** Ordering options when selecting data from "user_movie_pref". */
export type User_Movie_Pref_Order_By = {
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  movie?: InputMaybe<Movie_Order_By>;
  movie_id?: InputMaybe<Order_By>;
  similar_movies_aggregate?: InputMaybe<Similar_Movie_Aggregate_Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user?: InputMaybe<User_Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** select columns of table "user_movie_pref" */
export enum User_Movie_Pref_Select_Column {
  /** column name */
  CreatedAt = "created_at",
  /** column name */
  Id = "id",
  /** column name */
  MovieId = "movie_id",
  /** column name */
  UpdatedAt = "updated_at",
  /** column name */
  UserId = "user_id",
}

/** Ordering options when selecting data from "user". */
export type User_Order_By = {
  actor_ratings_aggregate?: InputMaybe<Actor_Rating_Aggregate_Order_By>;
  created_at?: InputMaybe<Order_By>;
  director_prefs_aggregate?: InputMaybe<User_Director_Pref_Aggregate_Order_By>;
  director_ratings_aggregate?: InputMaybe<Director_Rating_Aggregate_Order_By>;
  firstname?: InputMaybe<Order_By>;
  genre_prefs_aggregate?: InputMaybe<User_Genre_Pref_Aggregate_Order_By>;
  lastname?: InputMaybe<Order_By>;
  movie_prefs_aggregate?: InputMaybe<User_Movie_Pref_Aggregate_Order_By>;
  movie_ratings_aggregate?: InputMaybe<Movie_Rating_Aggregate_Order_By>;
  updated_at?: InputMaybe<Order_By>;
  username?: InputMaybe<Order_By>;
};

/** select columns of table "user" */
export enum User_Select_Column {
  /** column name */
  CreatedAt = "created_at",
  /** column name */
  Firstname = "firstname",
  /** column name */
  Lastname = "lastname",
  /** column name */
  UpdatedAt = "updated_at",
  /** column name */
  Username = "username",
}

export type Uuid_Cast_Exp = {
  String?: InputMaybe<String_Comparison_Exp>;
};

/** Boolean expression to compare columns of type "uuid". All fields are combined with logical 'AND'. */
export type Uuid_Comparison_Exp = {
  _cast?: InputMaybe<Uuid_Cast_Exp>;
  _eq?: InputMaybe<Scalars["uuid"]>;
  _gt?: InputMaybe<Scalars["uuid"]>;
  _gte?: InputMaybe<Scalars["uuid"]>;
  _in?: InputMaybe<Array<Scalars["uuid"]>>;
  _is_null?: InputMaybe<Scalars["Boolean"]>;
  _lt?: InputMaybe<Scalars["uuid"]>;
  _lte?: InputMaybe<Scalars["uuid"]>;
  _neq?: InputMaybe<Scalars["uuid"]>;
  _nin?: InputMaybe<Array<Scalars["uuid"]>>;
};

export type GetMoviesQueryVariables = Exact<{ [key: string]: never }>;

export type GetMoviesQuery = {
  __typename?: "query_root";
  movie: Array<{
    __typename?: "movie";
    id: any;
    title: string;
    poster?: string | null;
  }>;
};

export const GetMoviesDocument = gql`
  query getMovies {
    movie {
      id
      title
      poster
    }
  }
`;

/**
 * __useGetMoviesQuery__
 *
 * To run a query within a React component, call `useGetMoviesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetMoviesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetMoviesQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetMoviesQuery(
  baseOptions?: Apollo.QueryHookOptions<GetMoviesQuery, GetMoviesQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetMoviesQuery, GetMoviesQueryVariables>(
    GetMoviesDocument,
    options
  );
}
export function useGetMoviesLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetMoviesQuery,
    GetMoviesQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetMoviesQuery, GetMoviesQueryVariables>(
    GetMoviesDocument,
    options
  );
}
export type GetMoviesQueryHookResult = ReturnType<typeof useGetMoviesQuery>;
export type GetMoviesLazyQueryHookResult = ReturnType<
  typeof useGetMoviesLazyQuery
>;
export type GetMoviesQueryResult = Apollo.QueryResult<
  GetMoviesQuery,
  GetMoviesQueryVariables
>;
