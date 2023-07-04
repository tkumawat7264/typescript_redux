import {
  Stack,
  Table as MuiTable,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Skeleton,
  Pagination,
  Box,
  Typography,
} from "@mui/material";
import React from "react";
import Paper from "@mui/material/Paper";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";

export const defaultFilterOption = {
  searchTerm: "",
  page: 1,
  perPage: 10,
  orderBy: {
    by: "",
    order: "DESC",
  },
};

export const Table = ({
  columns = [],
  rows = [],
  loading = false,
  perPage = 0,
  lastPage = 0,
  currentPage = 0,
  total,
  onPageChange,
  orderBy,
}: // onOrderChange,
any) => {
  // const onOrderClick = (by) => {
  //     if (!by) return;
  //     if (by !== orderBy?.by) {
  //         onOrderChange?.({
  //             by,
  //             order: "ASC",
  //         });
  //     } else {
  //         onOrderChange?.({
  //             by,
  //             order: orderBy?.order?.toUpperCase() !== "ASC" ? "ASC" : "DESC",
  //         });
  //     }
  // };

  return (
    <Stack>
      <TableContainer component={Paper}>
        {!loading && rows?.length <= 0 ? (
          <Stack>
            <Typography variant="h5">No Data</Typography>
          </Stack>
        ) : (
          <MuiTable sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead
              sx={{
                backgroundColor: "#cf0534",
              }}
            >
              <TableRow>
                {columns?.map(
                  (
                    { label, renderHead, headCellProps, orderName }: any,
                    index: any
                  ) => {
                    return (
                      <TableCell
                        {...headCellProps}
                        sx={{ color: "#fff", fontSize: "20px" }}
                        key={index}
                        // onClick={() => {
                        //     onOrderClick(orderName);
                        // }}
                        className="cursor-pointer"
                      >
                        <Stack direction="row">
                          {renderHead?.() || (
                            <span className="font-bold">{label}</span>
                          )}
                          <Box className="inline-block ml-auto">
                            {orderBy?.by &&
                              orderBy?.by === orderName &&
                              (orderBy?.order === "ASC" ? (
                                <ArrowDropDownIcon />
                              ) : (
                                <ArrowDropUpIcon />
                              ))}
                          </Box>
                        </Stack>
                      </TableCell>
                    );
                  }
                )}
              </TableRow>
            </TableHead>
            <TableBody>
              {loading ? (
                <LoadingSkelton columns={columns} />
              ) : (
                rows?.map((row: any, indexRow: any) => (
                  <TableRow
                    key={indexRow}
                    sx={{
                      "&:last-child td, &:last-child th": {
                        border: 0,
                      },
                    }}
                  >
                    {columns?.map(
                      (
                        {
                          key,
                          renderRow,
                          inVisible,
                          rowCellProps,
                          isIndex = false,
                        }: any,
                        index: any
                      ) => {
                        if (inVisible) return null;
                        return (
                          <TableCell
                            {...rowCellProps}
                            component="th"
                            scope="row"
                            key={index}
                            sx={{ fontSize: "15px" }}
                          >
                            {renderRow?.(row)}
                          </TableCell>
                        );
                      }
                    )}
                  </TableRow>
                ))
              )}
            </TableBody>
          </MuiTable>
        )}
      </TableContainer>
      <Stack direction="column">
        {total && !loading ? (
          <span>
            showing {rows?.length} out of {total}
          </span>
        ) : null}
        <Pagination
          onChange={(_, page) => {
            onPageChange?.(page);
          }}
          color="primary"
          count={lastPage}
          page={currentPage}
          shape="rounded"
          className="ml-auto"
        />
      </Stack>
    </Stack>
  );
};

const LoadingSkelton = ({ columns }: any) => {
  return (
    <>
      {Array.apply(null, Array(3)).map((_, index) => {
        return (
          <TableRow key={index}>
            {columns?.map(
              ({ inVisible, rowCellProps }: any, indexCell: any) => {
                if (inVisible) return null;
                return (
                  <TableCell
                    {...rowCellProps}
                    component="th"
                    scope="row"
                    key={indexCell}
                  >
                    <Skeleton />
                  </TableCell>
                );
              }
            )}
          </TableRow>
        );
      })}
    </>
  );
};
